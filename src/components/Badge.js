// import { cx } from '@/utils/helpers'

// export function Badge({
//   children,
//   color = 'default',
//   size = 'md',
//   hasDot = false,
//   rounded = 'default',
//   canDelete = false,
// }) {
//   return (
//     <span
//       className={cx(
//         'inline-flex items-center font-medium',
//         {
//           'bg-gray-100 text-gray-800': color === 'default',
//           'bg-indigo-100 text-indigo-800': color === 'indigo',
//         },
//         canDelete
//           ? {
//               'pl-2 pr-0.5 py-0.5 text-xs': size === 'sm',
//               'pl-2.5 pr-1 py-0.5 text-sm': size === 'md',
//             }
//           : {
//               'px-2.5 py-0.5 text-xs': size === 'sm',
//               'px-3 py-0.5 text-sm': size === 'md',
//             },
//         {
//           'rounded-full': rounded === 'default',
//           rounded: rounded === 'sm',
//         }
//       )}
//     >
//       {hasDot && (
//         <svg
//           className={cx(
//             'h-2 w-2',
//             {
//               'text-gray-400 ': color === 'default',
//               'text-indigo-400': color === 'indigo',
//             },
//             {
//               '-ml-0.5 mr-1.5': size === 'sm',
//               '-ml-1 mr-1.5': size === 'md',
//             }
//           )}
//           fill="currentColor"
//           viewBox="0 0 8 8"
//         >
//           <circle cx="4" cy="4" r="3" />
//         </svg>
//       )}
//       {children}
//       {canDelete && (
//         <button
//           type="button"
//           className={cx(
//             'flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none focus:text-white',
//             {
//               'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500':
//                 color === 'default',
//               'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500':
//                 color === 'indigo',
//             }
//           )}
//         >
//           <span className="sr-only">删除</span>
//           <svg
//             className="w-2 h-2"
//             stroke="currentColor"
//             fill="none"
//             viewBox="0 0 8 8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeWidth="1.5"
//               d="M1 1l6 6m0-6L1 7"
//             />
//           </svg>
//         </button>
//       )}
//     </span>
//   )
// }
