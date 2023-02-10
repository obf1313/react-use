/**
 * @descriptor TODO
 * @author obf1313
 */
export type PromiseType<P extends Promise<any>> = P extends Promise<infer T> ? T : never

const useAsync = () => {}
export default useAsync
