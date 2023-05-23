/**
 * @descriptor 为 web 开发者提供了关于设备的位置和方向的改变速度的信息
 * 测试没什么作用，不确定触发条件
 * @author obf1313
 */
import { useEffect, useState } from 'react'
import { off, on } from './misc/util'

export interface MotionSensorState {
  acceleration: {
    x: number | null
    y: number | null
    z: number | null
  }
  accelerationIncludingGravity: {
    x: number | null
    y: number | null
    z: number | null
  }
  rotationRate: {
    alpha: number | null
    beta: number | null
    gamma: number | null
  }
  interval: number | null
}

const defaultState: MotionSensorState = {
  acceleration: {
    x: null,
    y: null,
    z: null,
  },
  accelerationIncludingGravity: {
    x: null,
    y: null,
    z: null,
  },
  rotationRate: {
    alpha: null,
    beta: null,
    gamma: null,
  },
  interval: 16,
}

const useMotion = (initialState: MotionSensorState = defaultState) => {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const handler = (event: MotionSensorState) => {
      const { acceleration, accelerationIncludingGravity, rotationRate, interval } = event
      setState({
        acceleration: {
          x: acceleration.x,
          y: acceleration.y,
          z: acceleration.z,
        },
        accelerationIncludingGravity: {
          x: accelerationIncludingGravity.x,
          y: accelerationIncludingGravity.y,
          z: accelerationIncludingGravity.z,
        },
        rotationRate: {
          alpha: rotationRate.alpha,
          beta: rotationRate.beta,
          gamma: rotationRate.gamma,
        },
        interval,
      })
    }
    // 为 web 开发者提供了关于设备的位置和方向的改变速度的信息。
    on(window, 'devicemotion', handler)
    return () => {
      off(window, 'devicemotion', handler)
    }
  }, [])
  return state
}
export default useMotion
