/**
 * @descriptor ScrollbarWidth
 * @author obf1313
 */
import useScrollbarWidth from '../hooks/useScrollbarWidth'

const Demo = () => {
  const sbw = useScrollbarWidth()

  return (
    <div>
      {sbw === undefined ? `DOM is not ready yet, SBW detection delayed` : `Browser's scrollbar width is ${sbw}px`}
    </div>
  )
}
export default Demo
