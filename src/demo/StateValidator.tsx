/**
 * @descriptor 状态校验
 * @author obf1313
 */
import * as React from 'react'
import useStateValidator from '../hooks/useStateValidator'

function DemoStateValidator(s: number | string) {
  return s === '' ? undefined : ((s as number) * 1) % 2 === 0
}

const Demo = () => {
  const [state, setState] = React.useState<string | number>(0)
  // @ts-ignore
  const [isValid] = useStateValidator(state, DemoStateValidator)

  return (
    <div>
      <div>Below field is valid only if number is even</div>
      <input
        type="number"
        min="0"
        max="10"
        value={state}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setState(ev.target.value)
        }}
      />
      {isValid !== null && <span>{isValid ? 'Valid!' : 'Invalid'}</span>}
    </div>
  )
}
export default Demo
