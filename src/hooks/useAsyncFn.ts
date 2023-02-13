/**
 * @descriptor
 * @author obf1313
 */
import { DependencyList, useCallback, useRef, useState } from 'react'
import useMountedState from './useMountedState'
import { FunctionReturnPromise, PromiseType } from './misc/types'

export type AsyncState<T> =
  | {
      loading: boolean
      error?: undefined
      value?: undefined
    }
  | {
      loading: true
      error?: Error | undefined
      value?: T
    }
  | {
      loading: false
      error: Error
      value?: undefined
    }
  | {
      loading: false
      error?: undefined
      value: T
    }

// T 为函数
// ReturnType<T>： Promise<any>
// PromiseType<Promise<any>>：Promise 的类型
// AsyncState<Promise 的类型>：根据 Promise 类型返回不同的类型
type StateFromFunctionReturningPromise<T extends FunctionReturnPromise> = AsyncState<PromiseType<ReturnType<T>>>
// = FunctionReturnPromise 默认值
export type AsyncFnReturn<T extends FunctionReturnPromise = FunctionReturnPromise> = [
  StateFromFunctionReturningPromise<T>,
  T
]

export default function useAsyncFn<T extends FunctionReturnPromise>(
  fn: T,
  deps: DependencyList = [],
  initialState: StateFromFunctionReturningPromise<T> = { loading: false }
): AsyncFnReturn<T> {
  const lastCallId = useRef(0)
  const isMounted = useMountedState()
  const [state, set] = useState<StateFromFunctionReturningPromise<T>>(initialState)

  const callback = useCallback((...args: Parameters<T>): ReturnType<T> => {
    // callId: 1
    // lastCallId: 0
    const callId = ++lastCallId.current
    // 不 loading 的情况下进入
    if (!state.loading) {
      set(prevSate => ({ ...prevSate, loading: true }))
    }
    return fn(...args).then(
      value => {
        // TODO: callId === lastCallId.current 有什么用？
        isMounted() && callId === lastCallId.current && set({ value, loading: false })
        return value
      },
      error => {
        isMounted() && callId === lastCallId.current && set({ error, loading: false })
        return error
      }
    ) as ReturnType<T>
  }, deps)

  return [state, callback as unknown as T]
}
