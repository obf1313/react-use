/**
 * @descriptor 有何用
 * @author obf1313
 */
import { useCallback } from 'react'
import useMountedState from './useMountedState'

export type UsePromise = () => <T>(promise: Promise<T>) => Promise<T>

const usePromise: UsePromise = () => {
  const isMounted = useMountedState()
  return useCallback(
    <T>(promise: Promise<T>) =>
      new Promise<T>((resolve, reject) => {
        const onValue = (value: T) => {
          isMounted() && resolve(value)
        }
        const onError = (error: Error) => {
          isMounted() && reject(error)
        }
        promise.then(onValue, onError)
      }),
    []
  )
}

export default usePromise
