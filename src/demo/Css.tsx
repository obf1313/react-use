/**
 * @descriptor
 * @author obf1313
 */
import useCss from '../hooks/useCss'

const Demo = () => {
  const className = useCss({
    color: 'red',
    border: '1px solid red',
    '&:hover': {
      color: 'blue',
    },
  })

  return <div className={className}>Hover me!</div>
}

export default Demo
