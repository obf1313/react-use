import { useEffect, useState } from 'react'
import { noop, off, on } from './misc/util'

export type IState = PermissionState | ''

interface IPushPermissionDescriptor extends PermissionDescriptor {
  name: 'push'
  userVisibleOnly?: boolean
}

// mdn 说应该这样 Navigator.requestMIDIAccess()
// 一种音乐相关的媒体接口
// interface IMidiPermissionDescriptor extends MIDIOptions {
//   name: 'midi'
//   sysex?: boolean
// }

// interface IDevicePermissionDescriptor extends PermissionDescriptor {
//   name: 'camera' | 'microphone' | 'speaker'
//   deviceId?: string
// }

export type IPermissionDescriptor = PermissionDescriptor | IPushPermissionDescriptor
// | IMidiPermissionDescriptor
// | IDevicePermissionDescriptor

const usePermission = (permissionDesc: IPermissionDescriptor) => {
  const [state, setState] = useState<IState>('')

  useEffect(() => {
    let mounted = true
    let permissionStatus: PermissionStatus | null = null

    const onChange = () => {
      if (!mounted) {
        return
      }
      setState(() => permissionStatus?.state ?? '')
    }

    navigator.permissions
      .query(permissionDesc)
      .then(status => {
        permissionStatus = status
        on(permissionStatus, 'change', onChange)
        onChange()
      })
      .catch(noop)

    // if (permissionDesc.name === 'midi') {
    // navigator
    //   .requestMIDIAccess(permissionDesc)
    //   .then(status => {
    //     on(permissionStatus, 'change', onChange)
    //     onChange()
    //   })
    //   .catch(noop)
    // } else if (permissionDesc.name === 'push') {
    // } else {
    // navigator.mediaDevices
    //   .getUserMedia()
    //   .then(status => {
    //     on(permissionStatus, 'change', onChange)
    //     onChange()
    //   })
    //   .catch(noop)
    // }

    return () => {
      permissionStatus && off(permissionStatus, 'change', onChange)
      mounted = false
      permissionStatus = null
    }
  }, [permissionDesc])

  return state
}

export default usePermission
