import { useCallback, useState } from 'react'

import useAuth from '@/hooks/useAuth'
import useLogin from '@/hooks/useLogin'
import LeftRight from '@/components/LeftRight'
import FormAuth, {
  InputEmail,
  InputPassword,
  ButtonSubmit,
} from '@/components/FormAuth'
import Menu, { authMenu } from '@/components/Menu'

function Right() {
  useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutate, isLoading, error } = useLogin()

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
    <FormAuth onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm">
        <InputEmail value={email} onChange={handleChangeEmail} />
        <InputPassword value={password} onChange={handleChangePassword} />
      </div>
      <ButtonSubmit loading={isLoading}>Sign in</ButtonSubmit>
      {error && <div className="text-sm">{error.message}</div>}
    </FormAuth>
  )
}

export default function Login() {
  return <LeftRight left={<Menu data={authMenu} />} right={<Right />} />
}
