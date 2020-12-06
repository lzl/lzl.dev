import clsx from 'clsx'
import { Menu, Transition } from '@headlessui/react'

export function Button({
  children,
  variant = 'outline',
  size = 'md',
  color = 'default',
  isFullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  isDisabled = false,
  ...rest
}) {
  return (
    <button
      className={clsx(
        'inline-flex items-center font-medium rounded focus:outline-none',
        {
          'border bg-white shadow-sm focus:ring': variant === 'outline',
          'text-white border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2':
            variant === 'solid',
          'border border-transparent bg-white focus:ring': variant === 'simple',
        },
        variant === 'outline' && {
          'text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-200':
            color === 'default',
          'text-red-700 border-red-700 hover:bg-red-50 focus:border-red-300 focus:ring-red-200':
            color === 'red',
        },
        variant === 'solid' && {
          'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500':
            color === 'default',
          'bg-red-600 hover:bg-red-700 focus:ring-red-500': color === 'red',
        },
        variant === 'simple' && {
          'text-gray-700 hover:bg-gray-50 focus:ring-gray-200':
            color === 'default',
          'text-red-700 hover:bg-red-50 focus:ring-red-200': color === 'red',
        },
        {
          'px-2 py-1 text-xs': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-base': size === 'lg',
          'block w-full justify-center': isFullWidth,
        },
        {
          'cursor-not-allowed opacity-50': isDisabled,
          'cursor-auto': isLoading,
        }
      )}
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {leftIcon && !isLoading && (
        <span
          className={clsx({
            '-ml-0.5 mr-2 w-4 h-4': size === 'sm',
            '-ml-1 mr-3 w-5 h-5': ['md', 'lg'].indexOf(size) > -1,
          })}
        >
          {leftIcon}
        </span>
      )}
      {isLoading && (
        <span
          className={clsx('animate-spin', {
            '-ml-0.5 mr-2 w-4 h-4': size === 'sm',
            '-ml-1 mr-3 w-5 h-5': ['md', 'lg'].indexOf(size) > -1,
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      {children}
      {rightIcon && (
        <span
          className={clsx({
            'ml-2 -mr-0.5 w-4 h-4': size === 'sm',
            'ml-3 -mr-1 w-5 h-5': ['md', 'lg'].indexOf(size) > -1,
          })}
        >
          {rightIcon}
        </span>
      )}
    </button>
  )
}

export function ButtonGroup({ items = [], size = 'md', dropdown = false }) {
  const len = items.length

  if (dropdown) {
    const [first = {}, ...rest] = items
    return (
      <span className="relative z-0 inline-flex rounded-md shadow-sm">
        <Menu>
          {({ open }) => (
            <>
              <button
                type="button"
                className={clsx(
                  'relative inline-flex items-center font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
                  {
                    'px-4 py-2 text-sm': size === 'md',
                    'px-6 py-3 text-sm': size === 'lg',
                  }
                )}
                onClick={first.onClick}
              >
                {first.name}
              </button>
              <span className="relative block -ml-px">
                <Menu.Button
                  type="button"
                  className={clsx(
                    'relative inline-flex items-center font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
                    {
                      'px-2 py-2 text-sm': size === 'md',
                      'px-3 py-3 text-sm': size === 'lg',
                    }
                  )}
                >
                  <span className="sr-only">更多选项</span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className={clsx(
                      'absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
                    )}
                  >
                    <div className="py-1">
                      {rest.map((item, idx) => (
                        <Menu.Item key={idx}>
                          {({ active }) => (
                            <button
                              className={clsx(
                                'group flex w-full px-4 py-2 text-sm text-left',
                                {
                                  'bg-gray-100 text-gray-900': active,
                                  'text-gray-700': !active,
                                }
                              )}
                              onClick={item.onClick}
                            >
                              {item.leftIcon && (
                                <span
                                  className={clsx({
                                    'mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500':
                                      ['md', 'lg'].indexOf(size) > -1,
                                  })}
                                >
                                  {item.leftIcon}
                                </span>
                              )}
                              {item.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    {/* <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#sign-out"
                            className={clsx(
                              'flex justify-between w-full px-4 py-2 text-sm text-left',
                              {
                                'bg-gray-100 text-gray-900': active,
                                'text-gray-700': !active,
                              }
                            )}
                          >
                            登出
                          </a>
                        )}
                      </Menu.Item>
                    </div> */}
                  </Menu.Items>
                </Transition>
              </span>
            </>
          )}
        </Menu>
      </span>
    )
  }

  return (
    <span className="relative z-0 inline-flex rounded-md shadow-sm">
      {items.map((item, idx) => (
        <button
          key={idx}
          type="button"
          className={clsx(
            'relative inline-flex items-center font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
            {
              'rounded-l-md': idx === 0,
              '-ml-px': idx > 0 && idx < len - 1,
              '-ml-px rounded-r-md': idx === len - 1,
            },
            {
              'px-2 py-1 text-xs': size === 'sm',
              'px-4 py-2 text-sm': size === 'md',
              'px-6 py-3 text-sm': size === 'lg',
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </span>
  )
}
