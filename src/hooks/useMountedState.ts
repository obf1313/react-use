/**
 * @descriptor 跟踪组件是否已安装
 * @author obf1313
 */
import { useCallback, useEffect, useRef } from 'react'

const useMountedState = () => {
  const mountedRef = useRef(false)
  const get = useCallback(() => mountedRef.current, [])
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])
  return get
}
export default useMountedState
