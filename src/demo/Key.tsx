/**
 * @descriptor
 * @author obf1313
 */

import { useState } from 'react'
import useKey from '../hooks/useKey'

const Demo = () => {
  const [count, set] = useState(0)
  const increment = () => set(count => ++count)
  useKey('ArrowUp', increment)

  return <div>Press arrow up: {count}</div>
}
export default Demo
