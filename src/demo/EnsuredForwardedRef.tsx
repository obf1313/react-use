/**
 * @descriptor
 * @author obf1313
 */
import { useEffect } from 'react'
import { ensuredForwardRef } from '../hooks/useEnsuredForwardedRef'

const Demo = () => {
  return <Child />
}

const Child = ensuredForwardRef((props: any, ref: any) => {
  useEffect(() => {
    console.log(ref.current.getBoundingClientRect())
  }, [])
  return <div ref={ref} />
})

export default Demo
