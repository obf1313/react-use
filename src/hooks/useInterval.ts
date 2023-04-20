/**
 * @descriptor
 * @author obf1313
 */
import { useEffect, useRef } from 'react'

const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {})

  useEffect(() => {
    console.log('1')
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0)
      return () => clearInterval(interval)
    }

    return undefined
  }, [delay])
}

export default useInterval
