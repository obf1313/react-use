/**
 * @descriptor
 * @author obf1313
 */
import useDrop from '../hooks/useDrop'

const Demo = () => {
  const state = useDrop({
    onFiles: files => console.log('files', files),
    onUri: uri => console.log('uri', uri),
    onText: text => console.log('text', text),
  })

  return <div>Drop something on the page.</div>
}
export default Demo
