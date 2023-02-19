import { TextField } from '@mui/material'
import React from 'react'

const FormInput = ({showEdit}) => {
  return (
    <div className='bg-white p-8 flex flex-col max-w-xl mx-auto gap-4 rounded-md shadow-lg'>
        <h3 className='text-lg font-semibold'>Edit profile details</h3>
        <TextField label="Name" name="name" type="text" placeholder="ex: Ceylon Timber Factory" />
        <TextField label="Mobile number" name="mobileNum" type="text" placeholder="ex: 07X XXXXXXX" />

        <div className='flex w-full justify-center items-center'>
            <button onClick={showEdit}
                className="flex text-base items-center mt-6 justify-center max-w-[150px]  px-8 py-2 font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>save</span>
            </button> 
        </div>

    </div>
  )
}

export default FormInput