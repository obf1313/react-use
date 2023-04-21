/**
 * @descriptor
 * @author obf1313
 */
import useKeyPress from '../hooks/useKeyPress'
const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const Demo = () => {
  const states = []
  for (const key of keys) {
    // 怎么会有人这样写代码，简直不可理喻
    // states.push(useKeyPress(key)[0])
  }

  return (
    <div style={{ textAlign: 'center' }}>
      Try pressing numbers
      <br />
      {/* {states.reduce((s, pressed, index) => s + (pressed ? (s ? ' + ' : '') + keys[index] : ''), '')} */}
    </div>
  )
}
export default Demo
