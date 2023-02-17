/**
 * @descriptor
 * React state hook that returns state getter function instead of raw state itself, this prevents subtle bugs when state is used in nested functions.
 * React 状态钩子返回状态获取器函数而不是原始状态本身，这可以防止在嵌套函数中使用状态时出现细微的错误。
 * @author obf1313
 */
import { useState } from 'react'
import useGetSet from '../hooks/useGetSet'

const Demo = () => {
  const [get, set] = useGetSet(0)
  const [num, setNum] = useState<number>(0)

  const onClick = () => {
    setTimeout(() => {
      set(get() + 1)
    }, 1_000)
  }

  const onLastClick = () => {
    // 好像也没啥问题
    setTimeout(() => {
      setNum(num + 1)
    }, 1_000)
  }

  return (
    <>
      <button onClick={onClick}>Clicked: {get()}</button>
      <button onClick={onLastClick}>Clicked: {num}</button>
    </>
  )
}

export default Demo
