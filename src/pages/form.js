import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import LeftRight from '@/components/LeftRight'
import Menu, { profileMenu } from '@/components/Menu'

function Right() {
  const { register, handleSubmit, errors, control } = useForm()

  const onSubmit = (data) => {
    console.log('onSubmit:', data)
  }

  console.log('errors:', errors)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  First name
                </label>
                <input
                  ref={register}
                  id="firstName"
                  name="firstName"
                  className="block w-full mt-1 transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Last name
                </label>
                <input
                  ref={register}
                  id="lastName"
                  name="lastName"
                  className="block w-full mt-1 transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <input
                  ref={register}
                  // ref={register({
                  //   required: 'Required',
                  //   pattern: {
                  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //     message: 'invalid email address',
                  //   },
                  // })}
                  id="email"
                  name="email"
                  className="block w-full mt-1 transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Country / Region
                </label>
                <select
                  ref={register}
                  id="country"
                  name="country"
                  className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>China</option>
                  <option>Japan</option>
                  <option>United States</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Street address
                </label>
                <input
                  ref={register}
                  id="address"
                  name="address"
                  className="block w-full mt-1 transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  City
                </label>
                <input
                  ref={register}
                  id="city"
                  name="city"
                  className="block w-full mt-1 transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  State / Province
                </label>
                <input
                  ref={register}
                  id="state"
                  name="state"
                  className="block w-full mt-1 transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  ZIP / Postal
                </label>
                <input
                  ref={register}
                  id="postal"
                  name="postal"
                  className="block w-full mt-1 transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-600">
              Save
            </button>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </>
  )
}

export default function Index() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
}
