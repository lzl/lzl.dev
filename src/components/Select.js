import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { cx } from '@/utils/helpers'

const people = [
  'Wade Cooper',
  'Arlene Mccoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
  'Caroline Schultz Caroline Schultz Caroline Schultz',
  'Mason Heaney',
  'Claudie Smitham',
  'Emil Schaefer',
]

export function Select() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className="w-full max-w-xs">
      <Listbox
        as="div"
        className="space-y-1"
        value={selectedPerson}
        onChange={setSelectedPerson}
      >
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              Assigned to
            </Listbox.Label>
            <div className="relative">
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left transition bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span className="block truncate">{selectedPerson}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
              </span>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute w-full mt-1 bg-white rounded-md shadow-lg"
              >
                <Listbox.Options
                  static
                  className="py-1 overflow-auto text-base rounded-md shadow-xs max-h-60 focus:outline-none"
                >
                  {people.map((person) => (
                    <Listbox.Option key={person} value={person}>
                      {({ selected, active }) => (
                        <div
                          className={cx(
                            'cursor-default select-none relative py-2 pl-8 pr-4',
                            active
                              ? 'text-white bg-indigo-600'
                              : 'text-gray-900'
                          )}
                        >
                          <span
                            className={cx(
                              'block truncate',
                              selected ? 'font-semibold' : 'font-normal'
                            )}
                          >
                            {person}
                          </span>
                          {selected && (
                            <span
                              className={cx(
                                'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                active ? 'text-white' : 'text-indigo-600'
                              )}
                            >
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
}
