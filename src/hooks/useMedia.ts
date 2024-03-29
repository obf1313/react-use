import { useEffect, useState } from 'react'
import { isBrowser } from './misc/util'

const getInitialState = (query: string, defaultState?: boolean) => {
  if (defaultState !== undefined) {
    return defaultState
  }
  if (isBrowser) {
    return window.matchMedia(query).matches
  }
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      '`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.'
    )
  }
  return false
}

const useMedia = (query: string, defaultState?: boolean) => {
  const [state, setState] = useState(getInitialState(query, defaultState))

  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    const onChange = () => {
      if (!mounted) {
        return
      }
      setState(!!mql.matches)
    }
    mql.addListener(onChange)
    setState(mql.matches)
    return () => {
      mounted = false
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}

export default useMedia
