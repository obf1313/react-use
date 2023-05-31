/**
 * @descriptor 網絡
 * @author obf1313
 */
import useNetworkState from '../hooks/useNetworkState'

const Demo = () => {
  const state = useNetworkState()
  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
export default Demo
