// import { Listbox, Transition } from '@headlessui/react'

// import { cx } from '@/utils/helpers'
// import { CheckIcon, SelectorIcon } from '@/components/Icon'

// export function Select({ options, value, onChange }) {
//   return (
//     <div className="w-full max-w-xs">
//       <Listbox as="div" className="space-y-1" value={value} onChange={onChange}>
//         {({ open }) => (
//           <>
//             <Listbox.Label className="block text-sm font-medium text-gray-700">
//               Assigned to
//             </Listbox.Label>
//             <div className="relative">
//               <span className="inline-block w-full rounded-md shadow-sm">
//                 <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left transition bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                   <span className="block truncate">{value}</span>
//                   <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                     <span className="w-5 h-5 text-gray-400">
//                       <SelectorIcon />
//                     </span>
//                   </span>
//                 </Listbox.Button>
//               </span>

//               <Transition
//                 show={open}
//                 leave="transition ease-in duration-100"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//                 className="absolute w-full mt-1 bg-white rounded-md shadow-lg"
//               >
//                 <Listbox.Options
//                   static
//                   className="py-1 overflow-auto text-base rounded-md shadow-xs max-h-60 focus:outline-none"
//                 >
//                   {options.map((option) => (
//                     <Listbox.Option key={option} value={option}>
//                       {({ selected, active }) => (
//                         <div
//                           className={cx(
//                             'cursor-default select-none relative py-2 pl-8 pr-4',
//                             active
//                               ? 'text-white bg-indigo-600'
//                               : 'text-gray-900'
//                           )}
//                         >
//                           <span
//                             className={cx(
//                               'block truncate',
//                               selected ? 'font-semibold' : 'font-normal'
//                             )}
//                           >
//                             {option}
//                           </span>
//                           {selected && (
//                             <span
//                               className={cx(
//                                 'absolute inset-y-0 left-0 flex items-center pl-1.5',
//                                 active ? 'text-white' : 'text-indigo-600'
//                               )}
//                             >
//                               <span className="w-5 h-5">
//                                 <CheckIcon />
//                               </span>
//                             </span>
//                           )}
//                         </div>
//                       )}
//                     </Listbox.Option>
//                   ))}
//                 </Listbox.Options>
//               </Transition>
//             </div>
//           </>
//         )}
//       </Listbox>
//     </div>
//   )
// }
