/**
 * @descriptor
 * @author obf1313
 */
import { useState } from 'react'
import useKey, { KeyFilter } from './useKey'

const useKeyPress = (ketFilter: KeyFilter) => {
  const [state, set] = useState<[boolean, null | KeyboardEvent]>([false, null])
  useKey(ketFilter, event => set([true, event]), { event: 'keydown' }, [state])
  useKey(ketFilter, event => set([true, event]), { event: 'keyup' }, [state])
  return state
}
export default useKeyPress
