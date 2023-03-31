/**
 * @descriptor
 * @author obf1313
 */
import useGetSetState from '../hooks/useGetSetState'

const Demo = () => {
  const [get, setState] = useGetSetState({ cnt: 0 })
  const onClick = () => {
    setTimeout(() => {
      setState({ cnt: get().cnt + 1 })
    }, 1000)
  }
  return <button onClick={onClick}>Clicked: {get().cnt}</button>
}
export default Demo
