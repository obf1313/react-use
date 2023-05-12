/**
 * @descriptor
 * @author obf1313
 */
import useMediaDevices from '../hooks/useMediaDevices'

const Demo = () => {
  const state = useMediaDevices()

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

export default Demo
