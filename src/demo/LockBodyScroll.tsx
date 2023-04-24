import useLockBodyScroll from '../hooks/useLockBodyScroll'
import useToggle from '../hooks/useToggle'

const Demo = () => {
  const [locked, toggleLocked] = useToggle(false)

  useLockBodyScroll(locked)

  return (
    <div>
      <button onClick={() => toggleLocked()}>{locked ? 'Unlock' : 'Lock'}</button>
    </div>
  )
}
export default Demo
