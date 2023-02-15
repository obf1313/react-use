/**
 * @descriptor 点击区域外响应事件
 * @author obf1313
 */
import { useRef } from 'react'
import useClickAway from '../hooks/useClickAway'

const Demo = () => {
  const ref = useRef(null)
  useClickAway(ref, () => {
    console.log('OUTSIDE CLICKED')
  })
  return <div ref={ref} style={{ width: 200, height: 200, background: 'red' }} />
}
export default Demo
