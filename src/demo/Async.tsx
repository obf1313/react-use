/**
 * @descriptor 使用 useAsync
 * @author obf1313
 */
import useAsync from '../hooks/useAsync'

const Demo = () => {
  const state = useAsync(async () => {
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
    </div>
  )
}
export default Demo
