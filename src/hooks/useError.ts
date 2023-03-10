/**
 * @descriptor
 * @author obf1313
 */
import { useState, useEffect, useCallback } from 'react'

const useError = (): ((err: Error) => void) => {
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])
  const dispatchError = useCallback((err: Error) => {
    setError(err)
  }, [])
  return dispatchError
}
export default useError
