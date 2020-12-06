import {
  PinInputProvider,
  usePinInput,
  usePinInputField,
  forwardRef,
} from '@chakra-ui/react'

export function PinInput({ children, ...rest }) {
  const context = usePinInput(rest)

  return (
    <PinInputProvider value={context}>
      <div className="flex space-x-2">{children}</div>
    </PinInputProvider>
  )
}

export const PinInputField = forwardRef(function PinInputField(props, ref) {
  const inputProps = usePinInputField({ ref, ...props })
  return (
    <input
      {...inputProps}
      className="w-10 h-10 text-base text-center text-gray-800 placeholder-gray-200 border rounded outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-500"
    />
  )
})
