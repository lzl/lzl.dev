import clsx from 'clsx'
import { Menu, Transition } from '@headlessui/react'

export function Button({
  children,
  variant = 'outline',
  size = 'md',
  isFullWidth = false,
  leftIcon,
  rightIcon,
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
          'block w-full justify-center': isFullWidth,
        }
      )}
    >
      {leftIcon && (
        <span
          className={clsx({
            '-ml-0.5 mr-1 w-4 h-4': size === 'sm',
            '-ml-1 mr-2 w-5 h-5': ['md', 'lg'].indexOf(size) > -1,
          })}
        >
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span
          className={clsx({
            'ml-1 -mr-0.5 w-4 h-4': size === 'sm',
            'ml-2 -mr-1 w-5 h-5': ['md', 'lg'].indexOf(size) > -1,
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
                      'absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none',
                      {
                        'w-40': size === 'md',
                        'w-48': size === 'lg',
                      }
                    )}
                  >
                    <div className="py-1">
                      {rest.map((item, idx) => (
                        <Menu.Item key={idx}>
                          {({ active }) => (
                            <button
                              className={clsx(
                                'flex justify-between w-full px-4 py-2 text-sm text-left',
                                {
                                  'bg-gray-100 text-gray-900': active,
                                  'text-gray-700': !active,
                                }
                              )}
                              onClick={item.onClick}
                            >
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
