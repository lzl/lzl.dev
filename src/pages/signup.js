import { useCallback, useState } from 'react'

import useAuth from '@/hooks/useAuth'
import useSignup from '@/hooks/useSignup'
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

  const { mutate, isLoading, error } = useSignup()

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
      <ButtonSubmit loading={isLoading}>Sign up</ButtonSubmit>
      {error && <div className="text-sm">{error.message}</div>}
    </FormAuth>
  )
}

export default function Signup() {
  return <LeftRight left={<Menu data={authMenu} />} right={<Right />} />
}
