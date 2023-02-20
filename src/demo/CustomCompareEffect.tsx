/**
 * @descriptor
 * @author obf1313
 */
import isEqual from 'lodash/isEqual'
import useCounter from '../hooks/useCounter'
import useCustomCompareEffect from '../hooks/useCustomCompareEffect'

const Demo = () => {
  const [count, { inc }] = useCounter(0)
  const options = { step: 2 }

  useCustomCompareEffect(
    () => {
      inc(options.step)
    },
    [options],
    (prevDeps, nextDeps) => isEqual(prevDeps, nextDeps)
  )

  return (
    <div>
      <p>useCustomCompareEffect with deep comparison: {count}</p>
    </div>
  )
}
export default Demo
