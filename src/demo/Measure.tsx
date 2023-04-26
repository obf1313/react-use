/**
 * @descriptor
 * @author obf1313
 */

import useMeasure from '../hooks/useMeasure'

const Demo = () => {
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure()

  return (
    <div ref={ref as any}>
      <div>x: {x}</div>
      <div>y: {y}</div>
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
