import useMethods from '../hooks/useMethods'

const initialState = {
  count: 0,
}

function createMethods(state: any) {
  return {
    reset() {
      return initialState
    },
    increment() {
      return { ...state, count: state.count + 1 }
    },
    decrement() {
      return { ...state, count: state.count - 1 }
    },
  }
}

const Demo = () => {
  const [state, methods] = useMethods(createMethods, initialState)

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={methods.decrement}>-</button>
      <button onClick={methods.increment}>+</button>
    </>
  )
}

export default Demo
