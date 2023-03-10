/**
 * @descriptor
 * @author obf1313
 */
import { RefObject, useEffect, useRef } from 'react'
import { on, off } from './misc/util'

const defaultEvents = ['mousedown', 'touchstart']

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway)

  useEffect(() => {
    savedCallback.current = onClickAway
  }, [onClickAway])

  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref
      // contains 很灵性
      el && !el.contains(event.target) && savedCallback.current(event)
    }
    for (const eventName of events) {
      on(document, eventName, handler)
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler)
      }
    }
  }, [events, ref])
}
export default useClickAway
