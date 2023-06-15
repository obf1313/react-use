/**
 * @descriptor scroll
 * @author obf1313
 */
import { RefObject, useEffect } from 'react'
import useRafState from './useRafState'
import { off, on } from './misc/util'

export interface State {
  x: number
  y: number
}

const useScroll = (ref: RefObject<HTMLElement>): State => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('`useScroll` expects a single ref argument.')
    }
  }

  const [state, setState] = useRafState<State>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop,
        })
      }
    }

    if (ref.current) {
      on(ref.current, 'scroll', handler, {
        // 在该类型事件捕获阶段传播到该 eventTarget 时触发
        capture: false,
        // listener 永远不会调用 preventDefault
        passive: true,
      })
    }

    return () => {
      if (ref.current) {
        off(ref.current, 'scroll', handler)
      }
    }
  }, [ref])

  return state
}

export default useScroll
