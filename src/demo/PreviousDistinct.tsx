import useCounter from '../hooks/useCounter'
import usePreviousDistinct from '../hooks/usePreviousDistinct'

const Demo = () => {
  const [count, { inc: relatedInc }] = useCounter(0)
  const [unrelatedCount, { inc }] = useCounter(0)
  const prevCount = usePreviousDistinct(count)

  // so 有什么用
  return (
    <p>
      Now: {count}, before: {prevCount}
      <button onClick={() => relatedInc()}>Increment</button>
      Unrelated: {unrelatedCount}
      <button onClick={() => inc()}>Increment Unrelated</button>
    </p>
  )
}
export default Demo
