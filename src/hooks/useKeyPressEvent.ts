/**
 * @descriptor
 * @author obf1313
 */
import { Handler, KeyFilter } from './useKey'
import useKeyPressDefault from './useKeyPress'
import useUpdateEffect from './useUpdateEffect'

// TODO: 不知道是个啥玩意，反正不按照我设想的运行
const useKeyPressEvent = (
  key: string | KeyFilter,
  keydown?: Handler | null | undefined,
  keyup?: Handler | null | undefined,
  useKeyPress = useKeyPressDefault
) => {
  const [pressed, event] = useKeyPress(key)
  useUpdateEffect(() => {
    if (!pressed && keyup) {
      console.log('按下')

      keyup(event!)
    } else if (pressed && keydown) {
      console.log('抬起')

      keydown(event!)
    }
  }, [pressed])
}
export default useKeyPressEvent
