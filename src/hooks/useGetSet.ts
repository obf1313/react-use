/**
 * @descriptor
 * @author obf1313
 */
import { stat } from 'fs'
import { Dispatch, useMemo, useRef } from 'react'
import { IHookStateInitAction, IHookStateSetAction, resolveHookState } from './misc/hookState'
import useUpdate from './useUpdate'

export default function useGetSet<S>(
  initialState: IHookStateInitAction<S>
): [get: () => S, set: Dispatch<IHookStateSetAction<S>>] {
  const state = useRef(resolveHookState(initialState))
  const update = useUpdate()

  return useMemo(
    () => [
      () => state.current as S,
      (newState: IHookStateSetAction<S>) => {
        state.current = resolveHookState(newState, state.current)
        update()
      },
    ],
    []
  )
}
