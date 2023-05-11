/**
 * @descriptor 媒体查询
 * @author obf1313
 */
import useMedia from '../hooks/useMedia'

const Demo = () => {
  const isWide = useMedia('(min-width: 480px)')

  return <div>Screen is wide: {isWide ? 'Yes' : 'No'}</div>
}
export default Demo
