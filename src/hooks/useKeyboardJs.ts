/**
 * @descriptor
 * @author obf1313
 */
import { useEffect, useState } from 'react'
import useMount from './useMount'

const useKeyboardJs = (combination: string | string[]) => {
  const [state, set] = useState<[boolean, null]>([false, null])
  const [keyboardJs, setKeyboardJs] = useState<any>(null)

  useMount(() => {
    // TODO: 不行，没用
    // import('keyboardjs').then(k => setKeyboardJs(k.default || k))
  })

  useEffect(() => {
    if (!keyboardJs) {
      return
    }
    const down = (event: any) => set([true, event])
    const up = (event: any) => set([false, event])
    keyboardJs.bind(combination, down, up, true)
    return () => {
      keyboardJs.unbind(combination, down, up)
    }
  }, [combination, keyboardJs])

  return state
}
export default useKeyboardJs
