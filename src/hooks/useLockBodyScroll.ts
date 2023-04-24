/**
 * @descriptor
 * @author obf1313
 */
import { RefObject, useEffect, useRef } from 'react'
import { isBrowser, off, on } from './misc/util'

export function getClosetBody(el: Element | HTMLElement | HTMLIFrameElement | null): HTMLElement | null {
  if (!el) {
    return null
  } else if (el.tagName === 'BODY') {
    return el as HTMLElement
  } else if (el.tagName === 'IFRAME') {
    const document = (el as HTMLFrameElement).contentDocument
    return document ? document.body : null
  } else if (!(el as HTMLElement).offsetParent) {
    return null
  }
  return getClosetBody((el as HTMLElement).offsetParent!)
}

function preventDefault(rawEvent: TouchEvent): boolean {
  const e = rawEvent || window.event
  if (e.touches.length > 1) {
    return true
  }
  if (e.preventDefault) {
    e.preventDefault()
  }
  return false
}

export interface BodyInfoItem {
  counter: number
  initialOverflow: CSSStyleDeclaration['overflow']
}

const isIosDevice =
  isBrowser && window.navigator && window.navigator.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent)
const bodies: Map<HTMLElement, BodyInfoItem> = new Map()
const doc: Document | undefined = typeof document === 'object' ? document : undefined
let documentListenerAdded = false

export default !doc
  ? function useLockBodyMock(_locked: boolean = true, _elementRef?: RefObject<HTMLElement>) {}
  : function useLockBody(locked: boolean = true, elementRef?: RefObject<HTMLElement>) {
      const bodyRef = useRef(doc!.body)
      elementRef = elementRef || bodyRef

      const lock = (body: any) => {
        const bodyInfo = bodies.get(body)
        if (!bodyInfo) {
          bodies.set(body, {
            counter: 1,
            initialOverflow: body.style.overflow,
          })
          if (isIosDevice) {
            if (!documentListenerAdded) {
              on(document, 'touchmove', preventDefault, { passive: false })
              documentListenerAdded = true
            }
          } else {
            body.style.overflow = 'hidden'
          }
        } else {
          bodies.set(body, {
            counter: bodyInfo.counter + 1,
            initialOverflow: bodyInfo.initialOverflow,
          })
        }
      }

      const unlock = (body: any) => {
        const bodyInfo = bodies.get(body)
        if (bodyInfo) {
          if (bodyInfo.counter === 1) {
            bodies.delete(body)
            if (isIosDevice) {
              body.ontouchmove = null
              if (documentListenerAdded) {
                off(document, 'touchmove', preventDefault)
                documentListenerAdded = false
              }
            } else {
              body.style.overflow = bodyInfo.initialOverflow
            }
          } else {
            bodies.set(body, {
              counter: bodyInfo.counter - 1,
              initialOverflow: bodyInfo.initialOverflow,
            })
          }
        }
      }

      useEffect(() => {
        const body = getClosetBody(elementRef!.current)
        if (!body) {
          return
        }
        if (locked) {
          lock(body)
        } else {
          unlock(body)
        }
      }, [locked, elementRef.current])

      useEffect(() => {
        const body = getClosetBody(elementRef!.current)
        if (!body) {
          return
        }
        return () => {
          unlock(body)
        }
      }, [])
    }
