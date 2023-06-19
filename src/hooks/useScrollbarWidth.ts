/**
 * @descriptor scroll 宽度
 * @author obf1313
 */
import { scrollbarWidth } from '@xobotyi/scrollbar-width'
import { useEffect, useState } from 'react'

const useScrollbarWidth = (): number | undefined => {
  const [sbw, setSbw] = useState(scrollbarWidth())

  useEffect(() => {
    if (typeof sbw !== 'undefined') {
      return
    }
    const raf = requestAnimationFrame(() => {
      setSbw(scrollbarWidth())
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return sbw
}
export default useScrollbarWidth
