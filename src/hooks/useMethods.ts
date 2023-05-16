import { Reducer, useMemo, useReducer } from 'react'

type Action = {
  type: string
  payload?: any
}

type A = {
  [a: string]: number
  [b: number]: number
  [c: symbol]: number
}

type CreateMethods<M, T> = (state: T) => {
  // keyof M：M 对象的 所有 key 的 key 的联合类型 'x' | 'y'
  // type Mapish = { [k: string]: boolean }
  // type M = keyof Mapish
  // type M = string | number
  // JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].
  // type Animals = 'pig' | 'cat' | 'dog'
  // type animals = {
  //     [key in Animals]: string
  // }
  // type animals = {
  //    pig: string; // 第一次迭代
  //    cat: string; // 第二次迭代
  //    dog: string; // 第三次迭代
  // }
  [P in keyof M]: (payload?: any) => T
}

type WrapperMethods<M> = {
  [P in keyof M]: (...payload: any) => void
}

const useMethods = <M, T>(createMethods: CreateMethods<M, T>, initialState: T): [T, WrapperMethods<M>] => {
  const reducer = useMemo<Reducer<T, Action>>(
    () => (reducerState: T, action: Action) => {
      // 返回值类型是 T
      // @ts-ignore
      return createMethods(reducerState)[action.type](...action.payload)
    },
    [createMethods]
  )

  const [state, dispatch] = useReducer<Reducer<T, Action>>(reducer, initialState)

  const wrappedMethods: WrapperMethods<M> = useMemo(() => {
    const actionTypes = Object.keys(createMethods(initialState))
    return actionTypes.reduce((acc: any, type) => {
      acc[type] = (...payload: any) => dispatch({ type, payload })
      return acc
    }, {} as WrapperMethods<M>)
  }, [createMethods, initialState])
  return [state, wrappedMethods]
}

export default useMethods
