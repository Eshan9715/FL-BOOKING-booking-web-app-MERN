import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import { Form, Formik } from 'formik';
import { TextField } from '../components/TextField';
import { userSchema1 } from '../components/userValidation';

import {authActions} from '../store';
import Navbar from '../components/Navbar';

const Login = () => {
  // const[isSignup, setIsSignup] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [details, setDetails] = useState([])

  const sendRequest = async(values) =>{
    const res = await axios.post("http://localhost:5000/api/user/login",{
      name:values.name,
      nickname: values.nickname,
      email:values.email,
      password: values.password,  
    }).catch(err=>console.log(err))

    // const data = await res.data;
    // return data;
    setDetails(res.data)
  };

  console.log(details)

  return (
    <>
    <Navbar/>
      <div className="bg-gradient-to-b from-blue-500 to-gray-900 w-screen">
        <div className="flex justify-center min-h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/5">
                <img src='https://media.istockphoto.com/id/1339057752/photo/a-large-container-cargo-ship-in-motion.jpg?s=612x612&w=0&k=20&c=l39VgVcB6NSmMjwAgS3nmZoZ-PEjEbGEnMFQEqHOOCg=' alt='' className='h-full max-w-3xl'/>
            </div>

            <div className="flex mt-32 max-w-xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Welcome back.
                    </h1>
 
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base">
                        Lets get you all with your data verify it's you.
                    </p>
                
                    <Formik
                      initialValues={{                 
                        email: '',
                        password: '',
                       
                      }}
                      validationSchema={userSchema1}
                      onSubmit={values => {
                        console.log(values);
                        sendRequest(values)
                          .then((data)=>localStorage.setItem("items",JSON.stringify(data.user)))
                          .then(()=>dispatch(authActions.login()))
                          .then(()=>navigate('/rules'))
                          .then(data=>console.log(data))
                          .then(()=>console.log("Login Successfull!"));

                      }}
                    >
                      {formik => (
                        <div>
                          <Form className='my-10 bg-white px-16 py-5 rounded-xl'>                         
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="password" name="password" type="password" />
                            <button type='submit'
                                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 my-5">
                                <span>Login </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button> 
                          </Form>
                        </div>
                      )}
                  </Formik>


                    <p className="text-gray-200 mt-8">Not registered yet? <Link to='/register' class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span></Link>
                    </p>
                  
                </div>
            </div>
        </div>
    </div>  
    </>
    
    )
}

export default Login