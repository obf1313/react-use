/**
 * @descriptor
 * @author obf1313
 */
import { useLayoutEffect, useEffect } from 'react'
import { isBrowser } from './misc/util'

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
export default useIsomorphicLayoutEffect
