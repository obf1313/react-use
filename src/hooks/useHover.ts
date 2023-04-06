/**
 * @descriptor
 * @author obf1313
 */
import React from 'react'
import { noop } from './misc/util'

const { useState } = React

export type Element = ((state: boolean) => React.ReactElement<any>) | React.ReactElement<any>

const useHover = (element: Element): [React.ReactElement<any>, boolean] => {
  const [state, setState] = useState(false)
  const onMouseEnter = (originalOnMouseEnter?: any) => (event: any) => {
    ;(originalOnMouseEnter || noop)(event)
    setState(true)
  }
  const onMouseLeave = (originalOnMouseEnter?: any) => (event: any) => {
    ;(originalOnMouseEnter || noop)(event)
    setState(false)
  }
  if (typeof element === 'function') {
    element = element(state)
  }

  const el = React.cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave),
  })

  return [el, state]
}

export default useHover
