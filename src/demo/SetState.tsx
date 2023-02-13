/**
 * @descriptor 设置 state
 * @author obf1313
 */
import useSetState from '../hooks/useSetState'

const Demo = () => {
  const [state, setState] = useSetState<{ count: number; hello: string; foo: string }>({ count: 1, hello: '', foo: '' })

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({ hello: 'world' })}>hello</button>
      <button onClick={() => setState({ foo: 'bar' })}>foo</button>
      <button
        onClick={() => {
          setState(prevState => ({
            count: (prevState.count || 0) + 1,
          }))
        }}>
        count
      </button>
    </div>
  )
}
export default Demo
