import useWindowScroll from '../hooks/useWindowScroll'
import useWindowSize from '../hooks/useWindowSize'

// 搞出来 chrome 的手机模拟有 bug
const Demo = () => {
  const { x, y } = useWindowScroll()
  const { width, height } = useWindowSize()

  return (
    <div style={{ height: '200vh', width: '200vw', background: 'red' }}>
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        <div>x: {x}</div>
        <div>y: {y}</div>
        <div>width: {width}</div>
        <div>height: {height}</div>
      </div>
    </div>
  )
}
export default Demo
