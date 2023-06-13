import useRaf from '../hooks/useRaf'

const Demo = () => {
  const elapsed = useRaf(5000, 1000)

  return <div>Elapsed: {elapsed}</div>
}
export default Demo
