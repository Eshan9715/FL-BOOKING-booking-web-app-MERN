import axios from 'axios';
import { Form, Formik } from 'formik';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Select from '../components/Select';
import { TextField } from '../components/TextField';
import { userSchema1, userSchema2, userSchema3, userSchema4, userSchema5 } from '../components/userValidation';
import {authActions} from '../store';
import user from '../assets/user.png';
import vessel from '../assets/vessel.jpg';
import det from '../assets/det.png';

import  storage  from "../components/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { TextForum } from '../components/TextForum';

const Booooking = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const options1 = [{key:1, value:"My first export"}, {key:2, value:"2 to 5"}, {key:3, value:"6 to 10"}, {key:4, value:"11 or more"} ]
    const options2 = [{key:1, value:"Regular cargo"}, {key:2, value:"Hazardous goods"}, {key:3, value:"Household goods"} ]
    const options3 = [{key:1, value:"Ready now"}, {key:2, value:"Ready in 2 weeks"}, {key:3, value:"Ready after 2 weeks"} ]

    const formArray = [1, 2, 3];
    const [formNo, setFormNo] = useState(formArray[0])

      const next = () => {
        setFormNo(formNo + 1)

      }
      const pre = () => {
        setFormNo(formNo - 1)
      }

    
  return (
    <>
    <Navbar/>
    <div className='w-screen flex justify-center bg-gradient-to-b from-blue-500 to-gray-900 overflow-auto'>
     
      <div className="w-3/4">
        <div className="w-full items-center">
          <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white mt-12">
              Create your account here.</h1>

          <p className="mt-4 text-gray-300">
              Lets get you all set up so you can verify your personal account and begin setting up your profile.
          </p>

          <Formik className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            initialValues={{
                loading: '',
                desty: '',
                conType: '',
                containerType: '',
                containerType1: '',
                quantity: '',
                quantity1: '',

            }}
            // validationSchema={formNo===1? userSchema4 :userSchema5 }
            onSubmit={values => {
              console.log(values);
              next();
              }}
            >
            {formik => (
              <div>
                <Form className='my-10 bg-white px-16 py-5 rounded-xl'>

                <div className='flex justify-center items-center'>
                  {
                    formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                      {v}
                    </div>
                      {
                        i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                      }
                    </>)
                  }
                </div>

                {
                  formNo === 1 && 
                  <>
                    <div className="mb-5 text-center mt-5">
                        <div className="mx-auto w-24 h-24 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                        {/* <img src={image} alt="preview" className="object-cover w-full h-24 rounded-full" /> */}

                        </div>

                    </div>

                    <div className='grid grid-cols-2 gap-10 mt-10'>
                        <TextForum label="Origin" name="loading" type="text" placeholder="Origin city or port" />
                        <TextForum label="Destination" name="desty" type="text" placeholder="Destination city or port" />
                    </div>
                    
                    <button type='submit'
                        className="flex items-center justify-center w-full my-5 px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Next </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rtl:-scale-x-100 mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button> 
                  </>
              
                }
                {
                  formNo === 2 && 
                  <div className='mt-5'>
                    <div className='flex justify-center items-center mb-5'>
                    <img src={det} alt='ship' className='w-[150px]'/>

                    </div>
                    {/* <TextField label="Work email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    <TextField label="Confirm password" name="confirmPassword" type="password" /> */}

                    <div className='flex justify-between items-center gap-5'>
                      <button onClick={pre}
                        className="flex items-center justify-center w-full my-5 px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">

                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 mr-2'>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                        </svg>
                        <span>Previous </span>
                      </button> 

                      <button type='submit'
                        className="flex items-center justify-center w-full my-5 px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Next </span>

                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 ml-2'>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </button> 
                    </div>
                 
                  </div>
                }

                {
                  formNo === 3 && 
                  <div className='mt-2'>
                  <div className='flex justify-center items-center'>
                   <img src={vessel} alt='ship' className='w-[200px]'/>
                  </div>
                 
                  {/* <Select label="No: of shipments last year?" name= "preShipments" type="number" options={options1}/>
                  <Select label="Frequent commodity type" name= "comdoType" type="text" options={options2}/>
                  <Select label="Next shipment date" name= "shipDate" type="text" options={options3}/> */}

                    {/* <div className='flex justify-between items-center gap-5'>
                      <button onClick={pre}
                      className="flex items-center justify-center w-full my-5 px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">

                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 mr-2'>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                      </svg>
                      <span>Previous </span>

                      </button> 

                      <button type='submit'
                      className="flex items-center justify-center w-full my-5 px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      <span>Submit </span>

                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 ml-2'>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                      </svg>
                      </button> 
                    </div>
                  */}
                  </div>
                }

                </Form>
              </div>
            )}
          </Formik>

          {/* <p className="text-gray-200 mt-8 justify-center flex">Already have an account?  <Link to='/login' class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg></span></Link>
          </p> */}

        </div>
      </div>
    </div> 
    </>
     
  )
}

export default Booooking