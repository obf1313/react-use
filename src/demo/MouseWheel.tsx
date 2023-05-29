/**
 * @descriptor 鼠标滚动，所以 wheel 和 scroll 事件完全不能等同
 * @author obf1313
 */
import useMouseWheel from '../hooks/useMouseWheel'

const Demo = () => {
  const mouseWheel = useMouseWheel()
  return (
    <>
      <h3>delta Y Scrolled: {mouseWheel}</h3>
    </>
  )
}
export default Demo
