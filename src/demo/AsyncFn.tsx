/**
 * @descriptor 使用 useAsyncFn
 * @author obf1313
 */
import useAsyncFn from '../hooks/useAsyncFn'

const Demo = () => {
  const [state, doFetch] = useAsyncFn(async (isResolve: boolean) => {
    const data: string = await new Promise((resolve, reject) => {
      if (isResolve) {
        resolve('resolve')
      } else {
        reject(new Error('error'))
      }
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
        <div>{state.value}</div>
      )}
      <button onClick={() => doFetch(true)}>Start loading</button>
    </div>
  )
}
export default Demo
