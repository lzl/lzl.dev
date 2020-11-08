export default function InputEmail(props) {
  const { value, onChange } = props

  return (
    <input
      aria-label="Email address"
      name="email"
      type="email"
      required
      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-gray focus:border-gray-300 focus:z-10 sm:text-sm sm:leading-5"
      placeholder="Email address"
      value={value}
      onChange={onChange}
    />
  )
}
