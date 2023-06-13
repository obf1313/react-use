/**
 * @descriptor
 * @author obf1313
 */
import useUpdate from '../hooks/useUpdate'
import { useRendersCount } from '../hooks/useRendersCount'

const Demo = () => {
  const update = useUpdate()
  const rendersCount = useRendersCount()

  return (
    <div>
      <span>Renders count: {rendersCount}</span>
      <br />
      <button onClick={update}>re-render</button>
    </div>
  )
}
export default Demo
