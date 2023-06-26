import useStartTyping from '../hooks/useStartTyping'

const Demo = () => {
  useStartTyping(() => alert('Started typing...'))

  return null
}
export default Demo
