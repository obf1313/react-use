/**
 * @descriptor
 * @author obf1313
 */
import { useEffect } from 'react'
import useFirstMountedState from './useFirstMountState'

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountedState()
  useEffect(() => {
    if (!isFirstMount) {
      return effect()
    }
  }, deps)
}
export default useUpdateEffect
