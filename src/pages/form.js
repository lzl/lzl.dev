// import * as React from 'react'
// import { useForm } from 'react-hook-form'

// import LeftRight from '@/components/LeftRight'
// import Menu, { profileMenu } from '@/components/Menu'
// import { isEmptyObject } from '@/utils/helpers'
// import { FormProvider, useFormDispatch, useFormState } from '@/context/form'

// const Input = React.forwardRef(({ type = 'text', name, label }, ref) => (
//   <>
//     <label htmlFor={name} className="block text-sm font-medium text-gray-700">
//       {label}
//     </label>
//     <input
//       type={type}
//       ref={ref}
//       id={name}
//       name={name}
//       className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//     />
//   </>
// ))
// Input.displayName = 'Input'

// const Select = React.forwardRef(({ name, label, options }, ref) => (
//   <>
//     <label htmlFor={name} className="block text-sm font-medium text-gray-700">
//       {label}
//     </label>
//     <select
//       ref={ref}
//       id={name}
//       name={name}
//       className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//     >
//       {options.map((o, i) => (
//         <option key={i}>{o}</option>
//       ))}
//     </select>
//   </>
// ))
// Select.displayName = 'Select'

// function Form() {
//   const { register, handleSubmit, errors } = useForm()
//   const dispatch = useFormDispatch()

//   const onSubmit = (data) => {
//     console.log('onSubmit:', data)
//     dispatch({ type: 'FORM_DATA', payload: data })
//   }

//   console.log('errors:', errors)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="overflow-hidden shadow sm:rounded-md">
//         <div className="px-4 py-5 bg-white sm:p-6">
//           <div className="grid grid-cols-6 gap-6">
//             <div className="col-span-6 sm:col-span-3">
//               <Input name="firstName" label="First name" ref={register} />
//             </div>

//             <div className="col-span-6 sm:col-span-3">
//               <Input name="lastName" label="Last name" ref={register} />
//             </div>

//             <div className="col-span-6 sm:col-span-4">
//               <Input
//                 type="email"
//                 name="email"
//                 label="Email address"
//                 ref={register({
//                   required: 'Required',
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: 'invalid email address',
//                   },
//                 })}
//               />
//             </div>

//             <div className="col-span-6 sm:col-span-3">
//               <Select
//                 name="country"
//                 label="Country / Region"
//                 options={['China', 'Japan', 'United States']}
//                 ref={register}
//               />
//             </div>

//             <div className="col-span-6">
//               <Input name="address" label="Street address" ref={register} />
//             </div>

//             <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//               <Input name="city" label="City" ref={register} />
//             </div>

//             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//               <Input name="state" label="State / Province" ref={register} />
//             </div>

//             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//               <Input name="postal" label="ZIP / Postal" ref={register} />
//             </div>
//           </div>
//         </div>
//         <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
//           <button className="px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 active:bg-gray-600">
//             Save
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

// function Result() {
//   const { formData } = useFormState()

//   if (!isEmptyObject(formData)) {
//     return <pre>{JSON.stringify(formData, null, 2)}</pre>
//   }

//   return null
// }

// function Right() {
//   return (
//     <FormProvider>
//       <Form />
//       <Result />
//     </FormProvider>
//   )
// }

// export default function Index() {
//   return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
// }
