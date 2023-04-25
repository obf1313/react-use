/**
 * @descriptor
 * @author obf1313
 */
import useMap from '../hooks/useMap'

const Demo = () => {
  const [map, { set, setAll, remove, reset }] = useMap<any>({
    hello: 'there',
  })

  return (
    <div>
      <button onClick={() => set(String(Date.now()), new Date().toJSON())}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => setAll({ hello: 'new', data: 'data' })}>Set new data</button>
      <button onClick={() => remove('hello')} disabled={!map.hello}>
        Remove 'hello'
      </button>
      <pre>{JSON.stringify(map, null, 2)}</pre>
    </div>
  )
}
export default Demo
