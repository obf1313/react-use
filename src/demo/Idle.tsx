/**
 * @descriptor
 * @author obf1313
 */
import useIdle from '../hooks/useIdle'

const Demo = () => {
  const isIdle = useIdle(3e3)
  return (
    <div>
      <div>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</div>
    </div>
  )
}
export default Demo
