/**
 * @descriptor
 * @author obf1313
 */
import { useRef } from 'react'
import useEffectOnce from './useEffectOnce'

const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn)
  fnRef.current = fn
  useEffectOnce(() => () => fnRef.current())
}

export default useUnmount
