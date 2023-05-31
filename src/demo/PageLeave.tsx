/**
 * @descriptor 离开页面
 * @author obf1313
 */
import usePageLeave from '../hooks/usePageLeave'

const Demo = () => {
  usePageLeave(() => console.log('Page left...'))

  return null
}
export default Demo
