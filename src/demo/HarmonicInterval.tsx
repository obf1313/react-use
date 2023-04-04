/**
 * @descriptor
 * @author obf1313
 */
import useHarmonicIntervalFn from '../hooks/useHarmonicIntervalFn'

const Demo = () => {
  useHarmonicIntervalFn(() => {
    console.log('1111')
  }, 1000)
  return <></>
}
export default Demo
