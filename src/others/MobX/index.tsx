/**
 * @descriptor MobX 测试
 * @author obf1313
 */
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect } from 'react'

// reducer
class Timer {
  // state
  secondPassed = 0
  constructor() {
    makeAutoObservable(this)
  }

  // action
  increase() {
    this.secondPassed += 1
  }

  reset() {
    this.secondPassed = 0
  }
}

const TimerView = observer(({ timer }: { timer: Timer }) => (
  <button onClick={() => timer.reset()}>已过秒数：{timer.secondPassed}</button>
))

const MobX = () => {
  const myTimer = new Timer()
  useEffect(() => {
    const id = setInterval(() => {
      myTimer.increase()
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  return <TimerView timer={myTimer} />
}

export default MobX
