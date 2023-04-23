/**
 * @descriptor
 * @author obf1313
 */
import { useState } from 'react'
import useKeyPressEvent from '../hooks/useKeyPressEvent'

const Demo = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count => ++count)
  const decrement = () => setCount(count => --count)
  const reset = () => setCount(0)

  useKeyPressEvent(']', increment)
  useKeyPressEvent('[', decrement)
  useKeyPressEvent('r', reset)

  return (
    <div>
      <p>
        Try pressing <code>[</code>, <code>]</code>, and <code>r</code> to see the count incremented and decremented.
      </p>
      <p>Count: {count}</p>
    </div>
  )
}
export default Demo
