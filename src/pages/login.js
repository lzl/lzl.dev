import useAuth from '@/hooks/useAuth'
import LeftRight from '@/components/LeftRight'
import FormLogin from '@/components/FormLogin'
import InputEmail from '@/components/InputEmail'
import InputPassword from '@/components/InputPassword'
import ButtonSubmit from '@/components/ButtonSubmit'

function Right() {
  useAuth()

  return (
    <FormLogin>
      <div className="rounded-md shadow-sm">
        <div>
          <InputEmail />
        </div>
        <div className="-mt-px">
          <InputPassword />
        </div>
      </div>

      <div>
        <ButtonSubmit />
      </div>
    </FormLogin>
  )
}

export default function Login() {
  return <LeftRight right={<Right />} />
}
