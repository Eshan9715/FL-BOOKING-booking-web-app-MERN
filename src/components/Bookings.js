import { Form, Formik } from 'formik'
import React from 'react'
import Navbar from './Navbar'
import Sidenavbar from './Sidenavbar'
import { TextForum } from './TextForum'
import { userSchema1 } from './userValidation'

const Bookings = () => {
  return (
    <>
    <Navbar/>
    <Sidenavbar role='Shipper'/>
    <div className="min-h-screen w-screen flex text-black bg-gradient-to-b from-blue-500 to-gray-900">
    <div className='ml-[220px] my-10'>
                <p className='text-3xl font-semibold text-white text-center'>Get Your Instant Freight Quotes <span className='text-white text-2xl px-3 py-2 rounded-xl bg-red-600 font-semibold'>Online.</span></p>

                <div className='mt-8 w-full flex justify-center items-center'>
                    <div className='bg-white backdrop-blur-sm border rounded-xl p-5  w-3/4'>
                        <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: ''
                                }}
                                validationSchema={userSchema1}
                                onSubmit={values => {
                                    console.log("Value added successfully!");                               

                                }}
                                >
                                {formik => (
                                    <div>
                                    <Form className='my-2 grid grid-cols-4 gap-5 px-5'>                               
                                        <TextForum label="Origin" name="loading" type="text" placeholder="Origin city or port" />
                                        <TextForum label="Destination" name="desty" type="text" placeholder="Destination city or port" />
                                        <TextForum label="Cargo" name="conType" type="text" placeholder="1x20ft" />
                                        <div className='flex w-full justify-center items-end mb-0'>
                                        <button type='submit'
                                                className="flex items-center justify-between w-3/4 h-[50px] px-6 py-3 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                <span>Search Rates</span>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                        </button> 
                                    </div>

                                    </Form>
                                    
                                    
                                    </div>
                                )}
                        </Formik>
                    </div>

                </div>
            </div>

    </div>

    </>
  )
}

export default Bookings