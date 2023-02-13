/**
 * @descriptor useEffect 时自调用的方法
 * @author obf1313
 */
import { DependencyList, useEffect } from 'react'
import useAsyncFn from './useAsyncFn'
import { FunctionReturnPromise } from './misc/types'

export type { AsyncState, AsyncFnReturn } from './useAsyncFn'

export default function useAsync<T extends FunctionReturnPromise>(fn: T, deps: DependencyList = []) {
  const [state, callback] = useAsyncFn(fn, deps, {
    loading: true,
  })
  useEffect(() => {
    callback()
  }, [callback])
  return state
}
