import useToggle from '../hooks/useToggle'
import useVibrate from '../hooks/useVibrate'

const Demo = () => {
  const [vibrating, toggleVibrating] = useToggle(false)

  useVibrate(vibrating, [300, 100, 200, 100, 1000, 300], false)

  return (
    <div>
      <button onClick={toggleVibrating}>{vibrating ? 'Stop' : 'Vibrate'}</button>
    </div>
  )
}
export default Demo
