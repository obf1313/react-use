/**
 * @descriptor 滚动
 * @author obf1313
 */
import { useRef } from 'react'
import useScrolling from '../hooks/useScrolling'

const Demo = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scrolling = useScrolling(ref)

  return (
    <div ref={ref} style={{ height: 200, overflow: 'auto' }}>
      <div style={{ position: 'fixed', top: 0, left: 0 }}>{scrolling.toString()}</div>
      <div style={{ height: 800, backgroundColor: 'red' }}></div>
    </div>
  )
}
export default Demo
