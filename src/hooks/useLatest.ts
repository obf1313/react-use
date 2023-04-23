/**
 * @descriptor
 * @author obf1313
 */
import { useRef } from 'react'

const useLatest = <T>(value: T): { readonly current: T } => {
  const ref = useRef(value)
  ref.current = value
  return ref
}
export default useLatest
