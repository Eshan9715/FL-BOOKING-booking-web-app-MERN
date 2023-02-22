import axios from 'axios';
import { Form, Formik } from 'formik';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Select from '../components/Select';
import { TextFields } from '../components/TextFields';
import { userSchema1, userSchema2 } from '../components/userValidation';
import {authActions} from '../store';
import user from '../assets/user.png';
import vessel from '../assets/vessel.jpg';
import det from '../assets/det.png';

import  storage  from "../components/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Success from '../components/Success';
import ProgressBar from '../components/ProgressBar';

var keyImg = '';
const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [progresspercent, setProgresspercent] = useState(0);


    // const options1 = [{key:1, value:"My first export"}, {key:2, value:"2 to 5"}, {key:3, value:"6 to 10"}, {key:4, value:"11 or more"} ]
    // const options2 = [{key:1, value:"Regular cargo"}, {key:2, value:"Hazardous goods"}, {key:3, value:"Household goods"} ]
    // const options3 = [{key:1, value:"Ready now"}, {key:2, value:"Ready in 2 weeks"}, {key:3, value:"Ready after 2 weeks"} ]

    const formArray = [1, 2, 3];
    const [formNo, setFormNo] = useState(formArray[0])

    const [file, setFile] = useState('');
    const [doneUpload, setDoneUpload] = useState(false)

    // progress

    // Handle file upload event and update state
    const handleChange = (event) => {
      setFile(event.target.files[0]);
      // alert(file)
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    }

    const handleUpload = async() => {
      if (!file) {
        alert("Please upload an image first!");
      }

      const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
        console.log(progresspercent)
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL)
          keyImg = downloadURL;
          if(keyImg!==""){
            setDoneUpload(true)
          }
        });
      }
    );

    };

    console.log(imageUrl);

    const sendRequest = async(values) =>{
        const newUser = {
          name:values.name,
          companyName: values.companyName,
          image:keyImg,
          email:values.email,
          password: values.password,  
          mobileNumber: values.mobileNum,
          // preShipments:values.preShipments,
          // comdoType: values.comdoType,
          // shipDate: values.shipDate

        }
          axios
          .post("http://localhost:5000/api/auth/signup",newUser)
          .then((res) => {
            // console.log(res);
            console.log(res.data);

            localStorage.setItem("userID",(res.data.user._id || res.data.member._id))
            localStorage.setItem("userName",(res.data.user.name || res.data.member.name))
            localStorage.setItem("userImage",(res.data.user.image || res.data.member.image))
            localStorage.setItem("userEmail",(res.data.user.email || res.data.member.email))
            localStorage.setItem("role",(res.data.user.role || res.data.member.role))

          });     
      };

      const next = () => {
        setFormNo(formNo + 1)

      }
      const pre = () => {
        setFormNo(formNo - 1)
      }

      const oneLast = (values)=>{
        // handleUpload()
        console.log(values)
        sendRequest(values)
          .then(()=>dispatch(authActions.login()))
          .then(()=>console.log("Registration Successfull!"))

          next();
      }
    
  return (
    <>
    <Navbar/>
    <div className='w-screen flex justify-center bg-gradient-to-b from-blue-500 to-gray-900 overflow-auto'>
      <div className="flex justify-center bg-slate-50">
          <div className="hidden bg-cover lg:block lg:w-full overflow-hidden">
              <img src='https://janahtransport.ly/wp-content/uploads/2018/05/seafreight-1024x576.jpg' alt='' className='h-full max-w-3xl bg-cover'/>
          </div>
      </div>
      <div className="mt-16 max-w-lg md:max-w-xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-full items-center">
          <h1 className="text-2xl font-semibold tracking-wider text-white capitalize dark:text-white mt-12">
              Create your account here.</h1>

          <p className="mt-4 text-gray-300">
              Lets get you all set up so you can verify your personal account and begin setting up your profile.
          </p>

          <Formik className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            initialValues={{
              name: '',
              companyName: '',
              email: '',
              password: '',
              confirmPassword: '',
              mobileNum:'',
              // preShipments:'',
              // comdoType:'',
              // shipDate:''

            }}
            validationSchema={formNo===1? userSchema1 : userSchema2 }
            onSubmit={values => {
              console.log(values);
              formNo===2? oneLast(values) : next();
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
                      {!image?
                      <img className="object-cover w-full h-24 rounded-full" src={user} alt=''/>:
                      <img src={image} alt="preview" className="object-cover w-full h-24 rounded-full" />}

                    </div>
    
                    <div className='flex justify-center items-center gap-2 mb-3'>
                      <label 
                        for="fileInput"
                        type="button"
                        className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                          <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>						
                        Browse Photo
                      </label>
                      <div className={`${doneUpload? "hidden": "flex"}`}>
                      <svg fill="none" stroke="currentColor" onClick={handleUpload} stroke-width="1.5" className='w-10 h-10 shadow-md border-2 p-2 bg-orange-500 text-white cursor-pointer rounded-full' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"></path>
                      </svg></div>
                    </div>
                    <ProgressBar progressPercentage={progresspercent} condition={doneUpload}/>
                 
                    <input name="photo" id="fileInput" accept="image/*" className="hidden" type="file" onChange={handleChange} />
                    {/* <div className='flex justify-center items-center'>
                      <p className='mt-2 text-xs text-red-600 '>{!image? "Please add your profile picture": ""}</p>
                    </div> */}


                    {/* <p className='hidden'>{percent} % done</p> */}

                  </div>

                <TextFields label="Name" name="name" type="text" placeholder="ex: Kamal Perera" />
                <TextFields label="Mobile number" name="mobileNum" type="text" placeholder="ex: 07X XXXXXXX" />
                <TextFields label="Company Name" name="companyName" type="text" placeholder="ex: Clemwood Pvt.Ltd" /> 

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
                    <TextFields label="Work email" name="email" type="email" />
                    <TextFields label="Password" name="password" type="password" />
                    <TextFields label="Confirm password" name="confirmPassword" type="password" />
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
                      <span>Submit </span>

                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 ml-2'>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                      </svg>
                      </button> 
                    </div>
                 
                  </div>
                }

                {
                  formNo === 3 && 
                  <Success title="your account" action="created!" type='low' handleClick={()=>navigate("/")}/>
                }

                </Form>
              </div>
            )}
          </Formik>

          <p className="text-gray-200 mt-8 justify-center flex">Already have an account?  <Link to='/login' class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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