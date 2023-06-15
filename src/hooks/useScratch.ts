import { cloneElement, FC, useEffect, useRef, useState } from 'react'
import { render } from 'react-universal-interface'
import useLatest from './useLatest'
import { noop, off, on } from './misc/util'

export interface ScratchSensorParams {
  disabled?: boolean
  onScratch?: (state: ScratchSensorState) => void
  onScratchStart?: (state: ScratchSensorState) => void
  onScratchEnd?: (state: ScratchSensorState) => void
}

export interface ScratchSensorState {
  isScratching: boolean
  start?: number
  end?: number
  x?: number
  y?: number
  dx?: number
  dy?: number
  docX?: number
  docY?: number
  posX?: number
  posY?: number
  elH?: number
  elW?: number
  elX?: number
  elY?: number
}

const useScratch = (params: ScratchSensorParams = {}): [(el: HTMLElement | null) => void, ScratchSensorState] => {
  const { disabled } = params
  const paramsRef = useLatest(params)
  const [state, setState] = useState<ScratchSensorState>({ isScratching: false })
  const [el, setEl] = useState<HTMLElement | null>(null)
  const refState = useRef<ScratchSensorState>(state)
  const refScratching = useRef<boolean>(false)
  const refAnimationFrame = useRef<any>(null)
  useEffect(() => {
    if (disabled) return
    if (!el) return

    const onMoveEvent = (docX: number, docY: number) => {
      cancelAnimationFrame(refAnimationFrame.current)
      refAnimationFrame.current = requestAnimationFrame(() => {
        const { left, top } = el.getBoundingClientRect()
        // 所以 left 等是不包括滚动的？
        const elX = left + window.scrollX
        const elY = top + window.scrollY
        const x = docX - elX
        const y = docY - elY
        setState((oldState: ScratchSensorState) => {
          const newState = {
            ...oldState,
            dx: x - (oldState.x || 0),
            dy: y - (oldState.y || 0),
            end: Date.now(),
            isScratching: true,
          }
          // prettier-ignore
          refState.current = newState;
          // prettier-ignore
          (paramsRef.current.onScratch || noop)(newState)
          return newState
        })
      })
    }

    const onMouseMove = (event: MouseEvent) => {
      onMoveEvent(event.pageX, event.pageY)
    }

    const onTouchMove = (event: TouchEvent) => {
      onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY)
    }

    let onMouseUp: Function
    let onTouchEnd: Function

    const stopScratching = () => {
      if (!refScratching.current) return
      refScratching.current = false
      // prettier-ignore
      refState.current = { ...refState.current, isScratching: false };
      // prettier-ignore
      (paramsRef.current.onScratchEnd || noop)(refState.current)
      setState({ isScratching: false })
      off(window, 'mousemove', onMouseMove)
      off(window, 'touchmove', onTouchMove)
      off(window, 'mouseup', onMouseUp)
      off(window, 'touchend', onTouchEnd)
    }

    onMouseUp = stopScratching
    onTouchEnd = stopScratching

    const startScratching = (docX: number, docY: number) => {
      if (!refScratching.current) return
      const { left, top } = el.getBoundingClientRect()
      const elX = left + window.scrollX
      const elY = top + window.scrollY
      const x = docX - elX
      const y = docY - elY
      const time = Date.now()
      const newState = {
        isScratching: true,
        start: time,
        end: time,
        docX,
        docY,
        x,
        y,
        dx: 0,
        dy: 0,
        elH: el.offsetHeight,
        elW: el.offsetWidth,
        elX,
        elY,
      }
      // prettier-ignore
      refState.current = newState;
      // prettier-ignore
      (paramsRef.current.onScratchStart || noop)(newState)
      setState(newState)
      on(window, 'mousemove', onMouseMove)
      on(window, 'touchmove', onTouchMove)
      on(window, 'mouseup', onMouseUp)
      on(window, 'touchend', onTouchEnd)
    }

    const onMouseDown = (event: MouseEvent) => {
      refScratching.current = true
      startScratching(event.pageX, event.pageY)
    }

    const onTouchStart = (event: TouchEvent) => {
      refScratching.current = true
      startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY)
    }

    on(el, 'mousedown', onMouseDown)
    on(el, 'touchstart', onTouchStart)

    return () => {
      off(el, 'mousedown', onMouseDown)
      off(el, 'touchstart', onTouchStart)
      off(window, 'mousemove', onMouseMove)
      off(window, 'touchmove', onTouchMove)
      off(window, 'mouseup', onMouseUp)
      off(window, 'touchend', onTouchEnd)

      if (refAnimationFrame.current) cancelAnimationFrame(refAnimationFrame.current)
      refAnimationFrame.current = null

      refScratching.current = false
      refState.current = { isScratching: false }
      setState(refState.current)
    }
  }, [el, disabled, paramsRef])

  return [setEl, state]
}

export interface ScratchSensorProps extends ScratchSensorParams {
  children: (state: ScratchSensorState, ref: (el: HTMLElement | null) => void) => React.ReactElement<any>
}

export const ScratchSensor: FC<ScratchSensorProps> = props => {
  const { children, ...params } = props
  const [ref, state] = useScratch(params)
  // 不是很懂这是干啥
  const element = render(props, state)

  return cloneElement(element, {
    ...element.props,
    ref: (el: HTMLElement) => {
      if (element.props.ref) {
        if (typeof element.props.ref === 'object') element.props.ref.current = el
        if (typeof element.props.ref === 'function') element.props.ref(el)
      }
      ref(el)
    },
  })
}

export default useScratch
