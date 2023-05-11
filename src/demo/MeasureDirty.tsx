/**
 * @descriptor
 * @author obf1313
 */
import { useRef } from 'react'
import useMeasureDirty from '../hooks/useMeasureDirty'

const Demo = () => {
  const ref = useRef(null)
  const { width, height, top, right, bottom, left } = useMeasureDirty(ref)

  return (
    <div ref={ref as any}>
      <div>width: {width}</div>
      <div>height: {height}</div>
      <div>top: {top}</div>
      <div>right: {right}</div>
      <div>bottom: {bottom}</div>
      <div>left: {left}</div>
    </div>
  )
}
export default Demo
