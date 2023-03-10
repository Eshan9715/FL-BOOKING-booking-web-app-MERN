import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextForum = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-0">
      <label className="block mb-2 text-sm text-black" htmlFor={field.name}>{label}</label>
      <input
        className={`block w-full px-5 py-3 mt-2 text-black text-sm placeholder-grey-600 bg-gray-100 border-none rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className='text-[13px] text-red-600 mb-1' />
    </div>
  )
}

