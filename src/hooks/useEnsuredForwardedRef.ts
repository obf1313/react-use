/**
 * @descriptor
 * @author obf1313
 */
import { forwardRef, MutableRefObject, PropsWithChildren, useEffect, useRef } from 'react'

export default function useEnsuredForwardedRef<T>(forwardedRef: MutableRefObject<T>): MutableRefObject<T> {
  const ensuredRef = useRef(forwardedRef && forwardedRef.current)
  useEffect(() => {
    if (!forwardedRef) {
      return
    }
    forwardedRef.current = ensuredRef.current
  }, [forwardedRef])
  return ensuredRef
}

export function ensuredForwardRef<T, P = {}>(Component: any): any {
  return forwardRef((props: PropsWithChildren<P>, ref) => {
    const ensuredRef = useEnsuredForwardedRef(ref as MutableRefObject<T>)
    return Component(props, ensuredRef)
  })
}
