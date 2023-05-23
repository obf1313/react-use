import useMotion from '../hooks/useMotion'

const Demo = () => {
  const state = useMotion()

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

export default Demo
