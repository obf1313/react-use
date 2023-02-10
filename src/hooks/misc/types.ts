export type PromiseType<P extends Promise<any>> = P extends Promise<infer T> ? T : never
export type FunctionReturnPromise = (...args: any[]) => Promise<any>
