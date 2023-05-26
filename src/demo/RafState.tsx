/**
 * @descriptor
 * @author obf1313
 */
import useMount from '../hooks/useMount'
import useRafState from '../hooks/useRafState'

const Demo = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  })

  useMount(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  })

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
export default Demo
