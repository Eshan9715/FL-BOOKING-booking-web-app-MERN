import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { TextField } from '../components/TextField';
import { userSchema } from '../components/userValidation';
import {authActions} from '../store';


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sendRequest = async(values) =>{
        const newUser = {
          firstName:values.firstName,
          lastName: values.lastName,
          email:values.email,
          password: values.password,  
        }        
          axios
          .post("http://localhost:5000/api/user/signup",newUser)
          .then((res) => {
            // console.log(res);
            console.log(res.data);
            localStorage.setItem("userID",res.data.user._id)
            localStorage.setItem("userName",res.data.user.firstName)
          });     
      };
    
  return (
    <>
    <Navbar/>
    <div className='w-screen flex justify-center bg-gray-900 overflow-auto'>
        <div className="flex justify-center bg-slate-50">
            <div className="hidden bg-cover lg:block lg:w-full overflow-hidden">
                <img src='https://www.transcocargo.lk/wp-content/uploads/2020/10/wharfage-charges-mts-2018-1.jpg' alt='' className='h-full max-w-3xl bg-cover'/>
            </div>
        </div>
        <div className="mt-16 max-w-lg md:max-w-xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full items-center">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white mt-12">
                  Create your account here.</h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Lets get you all set up so you can verify your personal account and begin setting up your profile.
              </p>

              <Formik className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                      initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                      }}
                      validationSchema={userSchema}
                      onSubmit={values => {
                        console.log(values);
                        sendRequest(values)
                          .then(()=>dispatch(authActions.login()))
                          .then(()=>navigate('/rules'))                       
                          .then(()=>console.log("Registration Successfull!"))

                      }}
                    >
                      {formik => (
                        <div>
                          <Form className='my-10'>
                            <TextField label="First Name" name="firstName" type="text" />
                            <TextField label="last Name" name="lastName" type="text" />
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="password" name="password" type="password" />
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />
                            <button type='submit'
                                className="flex items-center justify-between w-full mt-5 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Sign Up </span>

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

                  <p className="text-gray-200 mt-8">Already have an account?  <Link to='/login' class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg></span></Link>
              </p>

           </div>
        </div>
    </div> 
    </>
     
  )
}

export default Register