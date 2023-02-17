/**
 * @descriptor 单纯让视图更新？
 * @author obf1313
 */
import { useReducer } from 'react'

// 数字分隔符 1_000，分隔符只是方便看
const updateReducer = (num: number): number => (num + 1) % 1_000_000

export default function useUpdate(): () => void {
  const [, update] = useReducer(updateReducer, 0)
  return update
}
