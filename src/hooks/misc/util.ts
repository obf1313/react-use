export const noop = () => {}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  // Parameters 取得函数的参数
  // TODO: ...any 什么意思，我猜是剩下的参数都是 any
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  // 取得函数的参数
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
  }
}

export const isBrowser = typeof window !== 'undefined'
export const isNavigator = typeof navigator !== 'undefined'
