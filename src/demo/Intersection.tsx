/**
 * @descriptor
 * @author obf1313
 */
import * as React from 'react'
import useIntersection from '../hooks/useIntersection'

const Demo = () => {
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  return (
    <div style={{ paddingTop: '200vh' }}>
      <div ref={intersectionRef}>
        {intersection && intersection.intersectionRatio < 1 ? 'Obscured' : 'Fully in view'}
      </div>
    </div>
  )
}
export default Demo
