import useGeolocation from '../hooks/useGeolocation'

const Demo = () => {
  const state = useGeolocation()
  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

export default Demo
