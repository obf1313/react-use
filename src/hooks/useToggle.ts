/**
 * @descriptor boolean 转换
 * @author obf1313
 */
import { Reducer, useReducer } from 'react'

const toggleReducer = (state: boolean, nextValue?: any) => (typeof nextValue === 'boolean' ? nextValue : !state)

const useToggle = (initialValue: boolean): [boolean, (nextValue?: any) => void] => {
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue)
}
export default useToggle
