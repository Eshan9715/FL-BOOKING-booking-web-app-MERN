import React from 'react'
import { ErrorMessage, useField } from 'formik'

const SelectRow = ({label,options, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col w-full'>
         <div className='my-1 w-full flex justify-between items-center'>
            <label className='block text-sm text-black' htmlFor={field.name}>{label}</label>
            <select className={`block w-1/3  px-5 py-3 text-gray-700 placeholder-gray-100 bg-gray-100 border border-none rounded-md text-sm dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
                autoComplete="off"
                >
                {options.map(option => {
                return (
                    <option key={option.key} value={option.value} className="text-black">
                    {option.value} 
                    </option>
                )
                })}
           </select>
         </div>
         <ErrorMessage component="div" name={field.name} className='text-[13px] flex text-red-600 mb-1 justify-end' />
    </div>
   
  )
}

export default SelectRow