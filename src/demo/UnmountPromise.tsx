import { useEffect } from 'react'
import useUnmountPromise from '../hooks/useUnmountPromise'

const Demo = () => {
  const mounted = useUnmountPromise()

  const func = async () => {
    const data = await mounted(Promise.resolve('嘿嘿'))
    console.log('data', data)
  }
  useEffect(() => {
    func()
  }, [])

  return <></>
}
export default Demo
