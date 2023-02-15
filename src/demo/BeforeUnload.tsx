/**
 * @descriptor 当浏览器窗口关闭或者刷新时，会触发 beforeunload 事件。当前页面不会直接关闭，可以点击确定按钮关闭或刷新，也可以取消关闭或刷新。
 * @author obf1313
 */
import useBeforeUnload from '../hooks/useBeforeUnload'
import useToggle from '../hooks/useToggle'

const Demo = () => {
  const [dirty, toggleDirty] = useToggle(false)
  useBeforeUnload(dirty, 'You have unsaved changes, are you sure?')
  return (
    <div>
      {dirty && <p>Try to reload or close tab</p>}
      <button onClick={() => toggleDirty()}>{dirty ? 'Disable' : 'Enable'}</button>
    </div>
  )
}
export default Demo
