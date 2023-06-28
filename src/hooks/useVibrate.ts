import { useEffect } from 'react'
import { isNavigator, noop } from './misc/util'

export type VibrationPattern = number | number[]
const isVibrationApiSupported = isNavigator && 'vibrate' in navigator

/**
 * 震动
 * @param enabled
 * @param pattern 提供一个震动、暂停间隔的模式。每一个值表示交替震动或者暂停的毫秒数。
 * @param loop
 */
function useVibrate(enabled: boolean = true, pattern: VibrationPattern = [1000, 1000], loop: boolean = true): void {
  useEffect(() => {
    let interval: NodeJS.Timer
    if (enabled) {
      navigator.vibrate(pattern)
      if (loop) {
        const duration = pattern instanceof Array ? pattern.reduce((a, b) => a + b) : (pattern as number)
        interval = setInterval(() => {
          navigator.vibrate(pattern)
        }, duration)
      }
    }
    return () => {
      if (enabled) {
        navigator.vibrate(0)
        if (loop) {
          clearInterval(interval)
        }
      }
    }
  }, [enabled])
}

export default isVibrationApiSupported ? useVibrate : noop
