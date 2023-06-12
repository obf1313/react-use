import { useEffect, useState } from 'react'
import usePromise from '../hooks/usePromise'

const Demo = () => {
  const mounted = usePromise()
  const [value, setValue] = useState<string>('2')

  useEffect(() => {
    const a = async () => {
      const value = await mounted(Promise.resolve('1'))
      // This line will not execute if <Demo> component gets unmounted.
      setValue(value)
    }
    a()
  })

  return <div>{value}</div>
}
export default Demo
