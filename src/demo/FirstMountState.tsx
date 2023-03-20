/**
 * @descriptor 是否为初次加载
 * @author obf1313
 */
import useFirstMountState from '../hooks/useFirstMountState'
import useUpdate from '../hooks/useUpdate'

const Demo = () => {
  const isFirstMount = useFirstMountState()
  const update = useUpdate()

  return (
    <div>
      <span>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</span>
      <br />
      <button onClick={update}>re-render</button>
    </div>
  )
}

export default Demo
