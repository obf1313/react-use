/**
 * @descriptor 队列
 * @author obf1313
 */
import useQueue from '../hooks/useQueue'

const Queue = () => {
  const { first, last, size, add, remove } = useQueue<number>()
  return (
    <div>
      <div>first: {first}</div>
      <div>last: {last}</div>
      <div>size: {size}</div>
      <button onClick={() => add(1)}>添加</button>
      <button onClick={remove}>删除</button>
    </div>
  )
}
export default Queue
