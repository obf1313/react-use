/**
 * @descriptor
 * @author obf1313
 */
import { useEffect } from 'react'
import { off, on } from './misc/util'

const usePageLeave = (onPageLeave: Function, args = []) => {
  useEffect(() => {
    if (!onPageLeave) {
      return
    }
    const handler = (event: any) => {
      event = event ? event : (window.event as any)
      const from = event.relatedTarget || event.toElement
      if (!from || (from as any).nodeName === 'HTML') {
        onPageLeave()
      }
    }

    on(document, 'mouseout', handler)
    return () => {
      off(document, 'mouseout', handler)
    }
  }, args)
}
export default usePageLeave
