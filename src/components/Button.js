import clsx from 'clsx'

export function Button({
  children,
  variant = 'outline',
  size = 'md',
  fullWidth = false,
}) {
  return (
    <button
      className={clsx(
        'inline-flex items-center font-medium shadow-sm rounded focus:outline-none',
        {
          'text-gray-700 border border-gray-300 bg-white hover:bg-gray-50 focus:ring focus:ring-gray-200':
            variant === 'outline',
          'text-white border border-transparent bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500':
            variant === 'solid',
        },
        {
          'px-2 py-1 text-xs': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-base': size === 'lg',
          'block w-full justify-center': fullWidth,
        }
      )}
    >
      {children}
    </button>
  )
}
