import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const HoriText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col w-full'>
      <div className="mb-0 w-full flex justify-between items-center">
        <label className="flex mb-2 text-sm text-black" htmlFor={field.name}>{label}</label>
        <input
          className={`flex w-1/3 px-5 py-3 mt-2 text-black text-sm placeholder-grey-600 bg-gray-100 border-none rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
        />
      </div>
      <ErrorMessage component="div" name={field.name} className='text-[13px] text-red-600 mb-1 flex justify-end' />
    </div>
  )
}


<td class="px-6 py-4 flex justify-center items-center gap-1">
<p class="font-medium text-white hover:underline px-4 py-1.5 bg-green-600 rounded-lg">Edit</p>
<p class="font-medium text-white hover:underline px-4 py-1.5 bg-red-600 rounded-lg">Delete</p>

</td>
