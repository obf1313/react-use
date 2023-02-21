/**
 * @descriptor
 * @author obf1313
 */
import useDropArea from '../hooks/useDropArea'

const Demo = () => {
  const [bond, state] = useDropArea({
    onFiles: files => console.log('files', files),
    onUri: uri => console.log('uri', uri),
    onText: text => console.log('text', text),
  })
  return <div {...bond}>Drop something here.</div>
}
export default Demo
