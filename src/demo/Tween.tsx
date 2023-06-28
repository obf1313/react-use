import useTween from '../hooks/useTween'

const Demo = () => {
  const t = useTween('outQuart', 2000)

  return <div>Tween: {t}</div>
}
export default Demo
