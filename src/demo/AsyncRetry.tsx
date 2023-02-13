/**
 * @descriptor
 * @author obf1313
 */
import useAsyncRetry from '../hooks/useAsyncRetry'

const Demo = () => {
  const { retry, ...state } = useAsyncRetry(async () => {
    const data: string = await new Promise((resolve, reject) => {
      resolve('resolve')
    })
    return data
  }, [])

  return (
    <div>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>Error: {state.error.message}</div>
      ) : (
        <div>Value: {state.value}</div>
      )}
      {!state.loading && <button onClick={retry}>Retry</button>}
    </div>
  )
}
export default Demo
