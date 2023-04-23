import useKeyboardJs from '../hooks/useKeyboardJs'

const Demo = () => {
  const [isPressed] = useKeyboardJs('a + b')

  return <div>[a + b] pressed: {isPressed ? 'Yes' : 'No'}</div>
}
export default Demo
