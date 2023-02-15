/**
 * @descriptor 当浏览器窗口关闭或者刷新时，会触发 beforeunload 事件。当前页面不会直接关闭，可以点击确定按钮关闭或刷新，也可以取消关闭或刷新。
 * @author obf1313
 */
import { useCallback, useEffect } from 'react'
import { off, on } from './misc/util'

const useBeforeUnload = (enabled: boolean | (() => boolean) = true, message?: string) => {
  const handler = useCallback(
    (event: BeforeUnloadEvent) => {
      const finalEnabled = typeof enabled === 'function' ? enabled() : true
      if (!finalEnabled) {
        return
      }
      event.preventDefault()
      if (message) {
        event.returnValue = message
      }
      return message
    },
    [enabled, message]
  )

  useEffect(() => {
    if (!enabled) {
      return
    }
    on(window, 'beforeunload', handler)
    return () => off(window, 'beforeunload', handler)
  }, [enabled, handler])
}
export default useBeforeUnload
