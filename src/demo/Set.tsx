/**
 * @descriptor set
 * @author obf1313
 */
import useSet from '../hooks/useSet'

const Demo = () => {
  const [set, { add, has, remove, toggle, reset }] = useSet(new Set(['hello']))

  return (
    <div>
      <button onClick={() => add(String(Date.now()))}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle('hello')}>Toggle hello</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  )
}
export default Demo
