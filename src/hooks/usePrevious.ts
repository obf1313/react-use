/**
 * @descriptor
 * @author obf1313
 */
import { useEffect, useRef } from 'react'

const usePrevious = <T>(state: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = state
  })
  // 因为是副作用内赋值，所以拿到的是上一次的值
  return ref.current
}
export default usePrevious
