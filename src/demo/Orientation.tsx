/**
 * @descriptor 方向
 * @author obf1313
 */
import useOrientation from '../hooks/useOrientation'

const Demo = () => {
  const state = useOrientation()

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
export default Demo
