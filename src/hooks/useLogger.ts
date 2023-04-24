/**
 * @descriptor
 * @author obf1313
 */
import useEffectOnce from './useEffectOnce'
import useUpdateEffect from './useUpdateEffect'

const useLogger = (componentName: string, ...rest: any) => {
  useEffectOnce(() => {
    console.log(`${componentName} mounted`, ...rest)
    return () => console.log(`${componentName} unmounted`)
  })

  useUpdateEffect(() => {
    console.log(`${componentName} update`, ...rest)
  })
}
export default useLogger
