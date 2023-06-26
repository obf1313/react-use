import React from 'react'
import useSlider from '../hooks/useSlider'

const Demo = () => {
  const ref = React.useRef(null)
  const { isSliding, value } = useSlider(ref)

  return (
    <div>
      <div ref={ref} style={{ position: 'relative' }}>
        <p style={{ textAlign: 'center', color: isSliding ? 'red' : 'green' }}>{Math.round(value * 100)}%</p>
      </div>
    </div>
  )
}
export default Demo
