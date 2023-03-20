/**
 * @descriptor
 * @author obf1313
 */
import { useCallback } from 'react'
import useEvent from '../hooks/useEvent'
import useList from '../hooks/useList'

const Demo = () => {
  const [list, { push, clear }] = useList()

  const onKeyDown = useCallback(
    ({ key }: { key: string }) => {
      if (key === 'r') {
        clear()
      }
      push(key)
    },
    [clear, push]
  )

  useEvent('keydown', onKeyDown)

  return (
    <div>
      <p>
        Press some keys on your keyboard, <code style={{ color: 'tomato' }}>r</code> key resets the list
      </p>
      <pre>{JSON.stringify(list, null, 4)}</pre>
    </div>
  )
}
export default Demo
