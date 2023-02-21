/**
 * @descriptor
 * @author obf1313
 */
import { useState, useMemo, DragEventHandler, ClipboardEventHandler } from 'react'
import { noop } from './misc/util'
import useMountedState from './useMountedState'

export interface DropAreaState {
  over: boolean
}

export interface DropAreaBond {
  onDragOver: DragEventHandler
  onDragEnter: DragEventHandler
  onDragLeave: DragEventHandler
  onDrop: DragEventHandler
  onPaste: ClipboardEventHandler
}

interface DropAreaOptions {
  onFiles?: (files: File[], event?: Event) => void
  onText?: (text: string, event?: Event) => void
  onUri?: (url: string, event?: Event) => void
}

const createProcess = (options: DropAreaOptions, mounted: boolean) => (dataTransfer: DataTransfer, event: any) => {
  const uri = dataTransfer.getData('text/uri-list')
  if (uri) {
    // prettier-ignore
    (options.onUri || noop)(uri, event)
    return
  }
  if (dataTransfer.files && dataTransfer.files.length) {
    // prettier-ignore
    (options.onFiles || noop)(Array.from(dataTransfer.files), event)
    return
  }
  if (dataTransfer.items && dataTransfer.items.length) {
    dataTransfer.items[0].getAsString(text => {
      if (mounted) {
        // prettier-ignore
        (options.onText || noop)(text, event)
      }
    })
  }
}

const createBond = (process: any, setOver: (over: boolean) => void): DropAreaBond => ({
  onDragOver: event => {
    event.preventDefault()
  },
  onDragEnter: event => {
    event.preventDefault()
    setOver(true)
  },
  onDragLeave: () => {
    setOver(false)
  },
  onDrop: (event: any) => {
    event.preventDefault()
    event.persist()
    setOver(false)
    process(event.dataTransfer, event)
  },
  onPaste: (event: any) => {
    event.persist()
    process(event.clipboardData, event)
  },
})

const useDrop = (options: DropAreaOptions = {}): [DropAreaBond, DropAreaState] => {
  const { onFiles, onText, onUri } = options
  const isMounted = useMountedState()
  const [over, setOver] = useState<boolean>(false)
  const process = useMemo(() => createProcess(options, isMounted()), [onFiles, onText, onUri])
  const bond: DropAreaBond = useMemo(() => createBond(process, setOver), [process, setOver])

  return [bond, { over }]
}
export default useDrop
