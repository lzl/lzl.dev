import { memo } from 'react'
import useAuthStore from '@/stores/auth'
import { login } from '@/utils/auth'

function FormLogin({ children }) {
  const email = useAuthStore((s) => s.email)
  const password = useAuthStore((s) => s.password)
  const error = useAuthStore((s) => s.error)
  const setError = useAuthStore((s) => s.setError)
  const setLoading = useAuthStore((s) => s.setLoading)
  const resetForm = useAuthStore((s) => s.reset)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      setTimeout(() => {
        resetForm()
      }, 0)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {children}
      {error && <div className="text-sm">{error}</div>}
    </form>
  )
}

export default memo(FormLogin)
