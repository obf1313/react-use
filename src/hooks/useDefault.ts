/**
 * @descriptor
 * @author obf1313
 */
import { useState } from 'react'

const useDefault = <TStateType>(defaultValue: TStateType, initialValue: TStateType | (() => TStateType)) => {
  const [value, setValue] = useState<TStateType | undefined | null>(initialValue)
  if (value === undefined || value === null) {
    //  强制将类型视为不可变的
    return [defaultValue, setValue] as const
  }
  return [value, setValue] as const
}

export default useDefault
