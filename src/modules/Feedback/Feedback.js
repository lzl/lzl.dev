import * as React from 'react'
import { useForm } from 'react-hook-form'

const INPUT_DATA = [
  {
    token: 'name',
    type: 'text',
    defaultValue: 'LZL',
    required: false,
  },
  {
    token: 'age',
    type: 'number',
    defaultValue: 32,
    required: true,
  },
]

function TextInput({ register, value, error }) {
  const { token, defaultValue, required } = value
  return (
    <>
      <input
        type="text"
        defaultValue={defaultValue}
        {...register(token, { required })}
      />
      {error && <span>This field is required</span>}
    </>
  )
}

function NumberInput({ register, value, error }) {
  const { token, defaultValue, required } = value
  return (
    <>
      <input
        type="number"
        defaultValue={defaultValue}
        {...register(token, { required, valueAsNumber: true })}
      />
      {error && <span>This field is required</span>}
    </>
  )
}

function InputSwitcher({ register, value, error }) {
  const { type, ...rest } = value

  switch (type) {
    case 'text': {
      return <TextInput register={register} value={rest} error={error} />
    }
    case 'number': {
      return <NumberInput register={register} value={rest} error={error} />
    }
  }
}

export default function Feedback() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('onSubmit:', data)
  }

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
      {INPUT_DATA.map((value) => (
        <InputSwitcher
          key={value.token}
          register={register}
          value={value}
          error={errors[value.token]}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}
