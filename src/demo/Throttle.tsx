import { useEffect, useState } from 'react'
import useThrottle from '../hooks/useThrottle'

const Demo = () => {
  const [state, setState] = useState(0)
  const throttledValue = useThrottle(state, 1000)
  // const throttledValue = useThrottleFn(value => value, 200, [value]);

  useEffect(() => {
    const id = setInterval(() => {
      setState(state => state + 1)
    }, 100)

    return () => {
      if (id) {
        clearInterval(id)
      }
    }
  }, [])

  return (
    <>
      <div>Value: {state}</div>
      <div>Throttled value: {throttledValue}</div>
    </>
  )
}

export default Demo
