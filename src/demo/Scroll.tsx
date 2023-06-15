import React from 'react'
import useScroll from '../hooks/useScroll'

const Demo = () => {
  const scrollRef = React.useRef(null)
  const { x, y } = useScroll(scrollRef)

  return (
    <div ref={scrollRef} style={{ width: '100%', height: 100, overflow: 'auto' }}>
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        <div>x: {x}</div>
        <div>y: {y}</div>
      </div>
      <div style={{ height: 500, background: 'red' }}></div>
    </div>
  )
}
export default Demo
