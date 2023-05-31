/**
 * @descriptor 观察器
 * @author obf1313
 */

import useObservable, { Observable } from '../hooks/useObservable'

const counter$: Observable<number> & {
  next: (value: number) => void
} = {
  subscribe: listener => ({
    unsubscribe: () => {},
  }),
  next: (value: number) => {},
}

const Demo = () => {
  const value = useObservable(counter$, 0)

  return <button onClick={() => counter$.next(value + 1)}>Clicked {value} times</button>
}
export default Demo
