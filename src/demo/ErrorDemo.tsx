/**
 * @descriptor
 * @author obf1313
 */
import useError from '../hooks/useError'
import ErrorBoundary from '../others/ErrorBoundary'

const Demo = () => {
  const dispatchError = useError()
  const clickHandler = () => {
    dispatchError(new Error('Some error!'))
  }
  return <button onClick={clickHandler}>Click me to throw</button>
}

const App = () => (
  <ErrorBoundary>
    <Demo />
  </ErrorBoundary>
)

export default App
