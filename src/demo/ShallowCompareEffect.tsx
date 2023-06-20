/**
 * @descriptor 浅比较
 * @author obf1313
 */
import useCounter from '../hooks/useCounter'
import useShallowCompareEffect from '../hooks/useShallowCompareEffect'

const Demo = () => {
  const [count, { inc }] = useCounter(0)
  const options = { step: 2 }

  useShallowCompareEffect(() => {
    inc(options.step)
    // 对于 options 是浅比较
  }, [options])

  return (
    <div>
      <p>useShallowCompareEffect: {count}</p>
    </div>
  )
}
export default Demo
