import { useState } from 'react'
import useTitle from '../hooks/useTitle'

const Demo = () => {
  const [title, setTitle] = useState('测试标题')
  useTitle(title)
  return <div>title: {title}</div>
}
export default Demo
