/**
 * @descriptor
 * @author obf1313
 */
import { useCallback, useState } from 'react'
import useLifecycles from './useLifecycles'
import { on, off } from './misc/util'

const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash)
  const onHashChange = useCallback(() => {
    setHash(window.location.hash)
  }, [])
  useLifecycles(
    () => {
      on(window, 'hashchange', onHashChange)
    },
    () => {
      off(window, 'hashchange', onHashChange)
    }
  )
  const _setHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash
      }
    },
    [hash]
  )
  return [hash, _setHash] as const
}
export default useHash
