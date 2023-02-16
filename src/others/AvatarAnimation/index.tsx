/**
 * @descriptor 头像滚动动画
 * @author obf1313
 */
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'

const Avatar = () => {
  const [firstIndex, setFirstIndex] = useState<number>(1)
  const [showAnimation, setShowAnimation] = useState<boolean>(false)
  useEffect(() => {
    const id = setInterval(() => {
      setShowAnimation(true)
    }, 2000)
    const id1 = setInterval(() => {
      setShowAnimation(false)
      setFirstIndex(index => {
        if (index === 13) {
          return 1
        } else {
          return index + 1
        }
      })
    }, 5000)
    return () => {
      clearInterval(id)
      clearInterval(id1)
    }
  }, [])
  return (
    <div className="container">
      <div className="user-list-wrap">
        <img
          alt="icon"
          className={classNames('user', {
            animate: showAnimation,
            'fade-out': showAnimation,
          })}
          src={require(`./images/user_${firstIndex}.png`)}
        />
        {new Array(5).fill(0).map((_, index) => (
          <img
            alt="icon"
            key={index}
            className={classNames('user', {
              animate: showAnimation,
              trans: showAnimation,
            })}
            src={require(`./images/user_${firstIndex + index + 1}.png`)}
          />
        ))}
        <img
          alt="icon"
          className={classNames('user', 'user-last', {
            animate: showAnimation,
            'fade-in': showAnimation,
          })}
          src={require(`./images/user_${firstIndex + 6}.png`)}
        />
      </div>
    </div>
  )
}
export default Avatar
