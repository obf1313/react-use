import usePermission from '../hooks/usePermission'

const Demo = () => {
  const state = usePermission({ name: 'push' })

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
export default Demo
