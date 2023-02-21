/**
 * @descriptor
 * @author obf1313
 */
import { ClipboardEventHandler, DragEventHandler, useState, useCallback, useMemo, useEffect } from 'react'
import { noop, off, on } from './misc/util'

export interface DropAreaState {
  over: boolean
}

export interface DropAreaBond {
  onDragOver: DragEventHandler
  onDragEnter: DragEventHandler
  onDragLeave: DragEventHandler
  onDrop: DragEventHandler
  onPaster: ClipboardEventHandler
}

interface DropAreaOptions {
  onFiles?: (files: File[], event?: Event) => void
  onText?: (text: string, event?: Event) => void
  onUri?: (url: string, event?: Event) => void
}

const createProcess =
  (options: DropAreaOptions, args = []) =>
  (dataTransfer: DataTransfer, event: any) => {
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
    if (event.clipboardData) {
      // prettier-ignore
      (options.onText || noop)(event.clipboardData.getDate('text'), event)
      return
    }
  }

const useDrop = (options: DropAreaOptions = {}, args = []): DropAreaState => {
  const { onFiles, onText, onUri } = options
  const [over, setOverRaw] = useState<boolean>(false)
  const setOver = useCallback(setOverRaw, [])
  const process = useMemo(() => createProcess(options), [onFiles, onText, onUri])

  useEffect(() => {
    const onDragOver = (event: any) => {
      event.preventDefault()
      setOver(true)
    }
    const onDragEnter = (event: any) => {
      event.preventDefault()
      setOver(true)
    }
    const onDragLeave = () => {
      setOver(false)
    }
    const onDragExit = () => {
      setOver(false)
    }
    const onDrop = (event: any) => {
      event.preventDefault()
      setOver(false)
      process(event.dataTransfer, event)
    }
    const onPaste = (event: any) => {
      process(event.clipboardData, event)
    }
    on(document, 'dragover', onDragOver)
    on(document, 'dragenter', onDragEnter)
    on(document, 'dragleave', onDragLeave)
    on(document, 'dragexit', onDragExit)
    on(document, 'drop', onDrop)
    if (onText) {
      on(document, 'paste', onPaste)
    }
    return () => {
      off(document, 'dragover', onDragOver)
      off(document, 'dragenter', onDragEnter)
      off(document, 'dragleave', onDragLeave)
      off(document, 'dragexit', onDragExit)
      off(document, 'drop', onDrop)
      off(document, 'paste', onPaste)
    }
  }, [process, ...args])
  return { over }
}
export default useDrop
