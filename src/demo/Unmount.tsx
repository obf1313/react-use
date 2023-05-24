/**
 * @descriptor
 * @author obf1313
 */
import useUnmount from '../hooks/useUnmount'

const Demo = () => {
  useUnmount(() => alert('UNMOUNTED'))
  return null
}
export default Demo
