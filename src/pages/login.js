import { useCallback, useState } from 'react'

import useAuth from '@/hooks/useAuth'
import useLogin from '@/hooks/useLogin'
import LeftRight from '@/components/LeftRight'
import FormLogin from '@/components/FormLogin'
import InputEmail from '@/components/InputEmail'
import InputPassword from '@/components/InputPassword'
import ButtonSubmit from '@/components/ButtonSubmit'

function Right() {
  useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [mutate, { isLoading, error }] = useLogin()

  const handleChangeEmail = useCallback(
    (event) => setEmail(event.target.value),
    []
  )

  const handleChangePassword = useCallback(
    (event) => setPassword(event.target.value),
    []
  )

  async function handleSubmit(event) {
    event.preventDefault()
    await mutate({ email, password })
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm">
        <div>
          <InputEmail value={email} onChange={handleChangeEmail} />
        </div>
        <div className="-mt-px">
          <InputPassword value={password} onChange={handleChangePassword} />
        </div>
      </div>

      <div>
        <ButtonSubmit loading={isLoading}>Sign in</ButtonSubmit>
      </div>

      {error && <div className="text-sm">{error}</div>}
    </FormLogin>
  )
}

export default function Login() {
  return <LeftRight right={<Right />} />
}
