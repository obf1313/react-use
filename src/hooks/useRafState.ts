/**
 * @descriptor
 * @author obf1313
 */
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react'
import useUnmount from './useUnmount'

const useRafState = <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {
  const frame = useRef(0)
  const [state, setState] = useState(initialState)

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current)
    // 为什么要这么做
    // 你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
    // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
    frame.current = requestAnimationFrame(() => setState(value))
  }, [])

  useUnmount(() => {
    cancelAnimationFrame(frame.current)
  })
  return [state, setRafState]
}

export default useRafState
