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

const useAsyncFn = () => {}
export default useAsyncFn
