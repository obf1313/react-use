/**
 * @descriptor React sensor hook that tracks browser's location hash.
 * @author obf1313
 */
import useHash from '../hooks/useHash'
import useMount from '../hooks/useMount'

const Demo = () => {
  const [hash, setHash] = useHash()
  useMount(() => {
    setHash('#/path/to/page?userId=123')
  })

  return (
    <div>
      <div>window.location.href:</div>
      <div>
        <pre>{window.location.href}</pre>
      </div>
      <div>Edit hash:</div>
      <div>
        <input style={{ width: '100%' }} value={hash} onChange={e => setHash(e.target.value)} type="text" />
      </div>
    </div>
  )
}
export default Demo
