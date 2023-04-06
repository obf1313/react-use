/**
 * @descriptor 移入
 * @author obf1313
 */
import useHover from '../hooks/useHover'

const Demo = () => {
  const element = (hovered: boolean) => <div>Hover me! {hovered && 'Thanks!'}</div>
  const [hoverAble, hovered] = useHover(element)

  return (
    <div>
      {hoverAble}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  )
}
export default Demo
