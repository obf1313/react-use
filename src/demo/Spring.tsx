import { useState } from 'react'
import useSpring from '../hooks/useSpring'

// 弹簧显示数
const Demo = () => {
  const [target, setTarget] = useState(50)
  const value = useSpring(target)

  return (
    <div>
      {value}
      <br />
      <button onClick={() => setTarget(0)}>Set 0</button>
      <button onClick={() => setTarget(100)}>Set 100</button>
    </div>
  )
}
export default Demo
