/**
 * @descriptor 放大缩小
 * @author obf1313
 */

import { useEffect, useRef, useState } from 'react'
import usePinchZoom from '../hooks/usePinchZoom'

const Demo = () => {
  const [scale, setState] = useState(1)
  const scaleRef = useRef<HTMLDivElement>(null)
  const { zoomingState, pinchState } = usePinchZoom(scaleRef)

  useEffect(() => {
    if (zoomingState === 'ZOOMING_IN') {
      setState(scale + 0.1)
    } else if (zoomingState === 'ZOOMING_OUT') {
      setState(scale - 0.1)
    }
  }, [zoomingState])

  return (
    <div ref={scaleRef}>
      <img
        src="https://obs-test-sisyphe-filecenter.obs.cn-north-1.myhuaweicloud.com:443/P%2FP%2FO%2F3TUDX%2F1c325e7e-06ca-4f0c-86a8-4c6be9a9e0f0.jpg"
        style={{
          zoom: scale,
        }}
      />
    </div>
  )
}
export default Demo
