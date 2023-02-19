import axios from 'axios';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BasicDatePicker } from '../components/BasicDatePicker';
import { BasicTimePicker } from '../components/BasicDateTimePicker';
import Navbar from '../components/Navbar'
import { userSchema1, userSchema2, userSchema5, userSchema6 } from '../components/userValidation';
import shpr from '../assets/shpr.png'
import contload from '../assets/contload.png'
import vessel from '../assets/vessel.jpg'


import consgn from '../assets/consgn.png'
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Success from '../components/Success';
import Sidenavbar from '../components/Sidenavbar';
import { Box } from '@mui/system';
import { DisabledText } from '../components/DisabledText';
import BookingSummery from '../components/BookingSummery';


const BLD = () => {
    const formArray = [1, 2, 3, 4];
    const [formNo, setFormNo] = useState(formArray[0])
    const navigate = useNavigate();

    const [cardoRdDate, setCardoRdDate] = useState(new Date())
    const [mode, setMode] = useState('')

    const [role,setRole] = useState("");
    const [id,setID] = useState("");
  
    useEffect(() => {
        setRole(localStorage.getItem("role"))
        setID(localStorage.getItem("userID"))
    
    }, []);


    const sendRequest = async(values) =>{
        const newShipper = {
          name:values.name,
          companyName: values.companyName,
          email:values.email,
          password: values.password,  
          mobileNumber: values.mobileNum,
          // preShipments:values.preShipments,
          // comdoType: values.comdoType,
          // shipDate: values.shipDate

        }        
          axios
          .post("http://localhost:5000/api/Bookings/add",newShipper)
          .then((res) => {
            // console.log(res);
            console.log(res.data);
            // localStorage.setItem("userID",res.data.shipper._id)
            // localStorage.setItem("userName",res.data.shipper.firstName)
            // localStorage.setItem("userImage",res.data.shipper.image)
            // localStorage.setItem("userEmail",res.data.shipper.email)


          });     
      };

      const initialConValues = {
        Containers: [
          {  
            containerType: '',
            quantity: '',
          },
        ],
      };
    
      const initialLCLValues = {
        Packages:[
          {
            PKGStype: '',
            PKGScount:0,
            PKGSvolume:0,
            PKGSGweight:0,
            PKGSNweight:0,
    
          },
        ],
       
      };
    

      const next = () => {
        setFormNo(formNo + 1)

      }
      const pre = () => {
        setFormNo(formNo - 1)
      }

      const oneLast = (values)=>{
        sendRequest(values)
        //   .then(()=>dispatch(authActions.login()))
          .then(()=>console.log("Registration Successfull!"))

          next();
      }
  return (
    <>
    <Navbar/>
    <Sidenavbar role={role}/>

    <div className="min-h-screen w-screen overflow-auto bg-gradient-to-b from-blue-500 to-gray-900 justify-center items-center flex">
        <div className="w-full flex justify-center items-center mt-16 flex-col ml-[220px]">
          <h1 className="text-2xl font-semibold tracking-wider text-white capitalize dark:text-white mt-12">
              Keep your booking here.</h1>

              <div className='w-[90%] flex justify-center items-center'>
          <div className='w-full'>
            <Formik
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
            // validationSchema={formNo===1? userSchema : userSchema2 }
            onSubmit={values => {
              console.log(values);
              formNo===4? oneLast(values) : next();
              }}
            >
            {formik => (
              <div>
                <Form className='w-full my-4 bg-white px-16 py-5 rounded-xl'>

                <div className='w-full flex justify-center items-center'>
                  {
                    formArray.map((v, i) => 
                    <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo - 1 === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                      {v}
                    </div>
                      {
                        i !== formArray.length - 1 && 
                        <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}>
                        </div>
                      }
                    </>)
                  }
                </div>

                {
                  formNo === 1 && 
                  <>
                  <div className="w-full flex justify-center items-center flex-col">

                    <h3 className='font-semibold text-2xl p-2 my-5'>Partners Details</h3>

                    <div className="w-full grid grid-cols-2 gap-x-20 my-3 p-2">

                      <div className='flex justify-center items-center flex-col'>
                      
                        <img src={shpr} alt='' className='w-[180px]'/>
                        <h3 className='font-semibold text-xl my-3 p-2'>Shipper Details</h3>


                        <div className='w-full p-3 gap-5 flex flex-col'>
                        <TextField label="Name" name="name" type="text" placeholder="ex: Ceylon Timber Factory" />
                        <TextField label="Mobile number" name="mobileNum" type="text" placeholder="ex: 07X XXXXXXX" />
                        <Box
                            component="form"
                            sx={{
                              '& .MuiTextField-root': {width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <div>
                              <TextField
                                id="outlined-multiline-flexible"
                                label="Company address"
                                placeholder='ex: No:100, Main Road, Galle'
                                multiline
                                maxRows={4}
                              />
                        </div>
                        </Box>
                      </div>
                      </div>

                      
                      <div className='flex justify-center items-center flex-col'>
                        <img src={consgn} alt='' className='w-[150px]'/>
                        <h3 className='font-semibold text-xl my-3 p-2'>Consignee Details</h3>

                        <div className='w-full p-3 gap-5 flex flex-col'>
                        <TextField label="Name" name="name" type="text" placeholder="ex: Ceylon Timber Factory" />
                        <TextField label="Mobile number" name="mobileNum" type="text" placeholder="ex: 07X XXXXXXX" />
                        <Box
                            component="form"
                            sx={{
                              '& .MuiTextField-root': {width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <div>
                              <TextField
                                id="outlined-multiline-flexible"
                                label="Company address"
                                placeholder='ex: No:100, Main Road, Galle'
                                multiline
                                maxRows={4}
                              />
                        </div>
                        </Box>
                      </div>
                      </div>
                  
                    </div>

                     <button type='submit'
                      className="flex items-center justify-center w-1/3 px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      <span>Next </span>

                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rtl:-scale-x-100 mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd" />
                      </svg>
                    </button> 
                  </div>
                  </>
              
                }

                {
                  formNo === 2 && 
                  <>
                  <div className="w-full flex justify-center items-center flex-col">

                    <h3 className='font-semibold text-2xl p-2 my-5'>Shipment Details</h3>
                    <img src={vessel} alt='' className='w-[250px]'/>


                    <div className="w-full grid grid-cols-2 gap-x-20 gap-y-10 my-3 p-2">

                    <DisabledText label="Origin" defaultVal="Colombo" />
                    <DisabledText label="Destination" defaultVal="Dubai" />

                    <DisabledText label="Vessel" defaultVal="MSC Andromeeda" />
                    <TextField label="Voyage" name="name" type="text" placeholder="ex: AS1001" />


                    <BasicDatePicker label={"Cargo readyness date"} setDate={setCardoRdDate}/>
                    
                    <TextField label="Inco term" name="name" type="text" placeholder="ex: CIF" />
                                          
                    </div>
                    <div className='w-1/2 flex justify-between items-center gap-5'>

                      <button onClick={pre}
                      className="flex items-center justify-center w-full px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">

                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 mr-2'>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                      </svg>
                      <span>Previous </span>

                      </button> 

                      <button type='submit'
                      className="flex items-center justify-center w-full px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      <span>Next </span>

                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 ml-2'>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                      </svg>
                      </button> 

                    </div> 

                  </div>
                  </>
              
                }
                {
                  formNo === 3 && 

                  <div className="w-full flex justify-center items-center flex-col">

                      <h3 className='font-semibold text-2xl p-2 my-5'>Cargo Details</h3>
                      <img src={contload} alt='' className='w-[300px] mb-5'/>


                      <div className="w-full grid grid-cols-2 gap-x-20 gap-y-10 my-3 p-2">

                      <TextField label="Comodity type" name="mobileNum" type="text" placeholder="ex: wood" />
                      <TextField label="HS Code" name="mobileNum" type="text" placeholder="ex: ES 1234" />
                      <Box sx={{ width: '100%'}}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Shipment Mode</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={mode}
                            label="Shipment Mode"
                            onChange={(e)=>setMode(e.target.value)}

                        >
                        <MenuItem value={"FCL"}>FCL</MenuItem>
                        <MenuItem value={"LCL"}>LCL</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <TextField label="Cargo weight" name="name" type="text"   InputProps={{
                          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                      }}/>

                      </div>

                      {formNo === 3 && mode!==""  && <div className={`my-4 text-base list-none bg-white  rounded-lg w-3/4 h-[150px]`}>

                      </div>}

                                       
                      <div className='w-1/2 flex justify-between items-center gap-5'>

              

                        <button onClick={pre}
                        className="flex items-center justify-center w-full px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">

                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 mr-2'>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                        </svg>
                        <span>Previous </span>

                        </button> 

                        <button type='submit'
                        className="flex items-center justify-center w-full px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Submit </span>

                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 ml-2'>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                        </svg>
                        </button> 

                      </div> 


                  </div>

                }

                {
                  formNo === 4 && 
                  <>
                  <BookingSummery/>
                  <div className='w-full flex justify-center items-center my-10'>
                  <div className='w-3/4 flex justify-center items-center gap-5'>
                    <button onClick={pre}
                    className="flex items-center justify-center w-full px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">

                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 mr-2'>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                    </svg>
                    <span>Previous </span>

                    </button> 

                    <button type='submit'
                    className="flex items-center justify-center w-full px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Submit </span>

                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-4 h-4 mt-1 ml-2'>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg>
                    </button> 
                  </div>             
                 

                  </div> 


                  </>
                }


                {
                  formNo === 5 && 
                  <Success title="The Booking" action="added!" type="high"/>
                }



                </Form>
              </div>
            )}
            </Formik>

            {formNo === 3 && 
            <div className={`z-50 my-4 text-base list-none bg-white  rounded-lg  w-[770px] absolute top-[98%] left-[33%] shadow-lg`}>
              
              {mode==='FCL'&&
                <>
                <Formik
                  initialValues={initialConValues}
                  validationSchema={userSchema5}
                  onSubmit={async (values) => {
                    console.log(values);
                    // setCheckCargo("added");
                    // setTab(!tab);
                    // obj = {...initialValues, ...values}
                    // console.log(obj)
                    // newobj = {...obj, loading: origin, desty: destination}
                    // console.log(newobj)
                    // fclCargo = [...newobj.Containers]        
                    // console.log(fclCargo)

                  }}
                >
        
                {({ values }) => (
                  <Form>
                  <FieldArray name="Containers">
                    {({remove, push}) => (
                      <div className='divide-y divide-solid divide-gray-400'>
                        {values.Containers?.length > 0 &&
                          values.Containers?.map((container, index) => (
                            <div className='flex w-full justify-center items-center gap-2 p-3' key={index}>
                              <div className='w-[45%] p-3 text-sm flex flex-col gap-2'>
                                  <label htmlFor={`Containers.${index}.containerType`}>Container type</label>
                                  <Field as="select" 
                                    name={`Containers.${index}.containerType`}
                                    className='text-center p-2 w-[220px] rounded-md border'>
                                    <option value="20'St">20'St</option>
                                    <option value="40'St">40'St</option>
                                    <option value="40'HC">40'HC</option>
                                    <option value="45'HC">45'HC</option>
                                    <option value="20'RFG">20'RFG</option>
                                    <option value="40'RFG">40'RFG</option>

                                  </Field>
                                  <ErrorMessage name={`Containers.${index}.containerType`} component="div" className='text-[12px] text-red-600 mb-1'/>                                                  
                              </div>

                              <div className='w-[55%] text-sm flex  justify-center items-center'>
                                <div className='flex flex-col gap-2'>
                                  <label htmlFor={`Containers.${index}.quantity`}>Quantity</label>
                                    <Field
                                      name={`Containers.${index}.quantity`}
                                      placeholder=""
                                      type="number"
                                      className='text-center p-2 w-[200px] rounded-md border'
                                    />
                                    <ErrorMessage name={`Containers.${index}.quantity`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                </div>

                                <button onClick={() => remove(index)} disabled={values.Containers.length===1}>
                                  <svg fill="none" stroke="currentColor" className='w-7 h-7 mb-3 bg-red-600 p-1 text-white cursor-pointer font-extrabold rounded-full ml-5 mt-5' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                  </svg>
                                </button>

                                <button onClick={() => push({containerType: '', quantity: ''})} >
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 mb-3 bg-green-600 p-1 text-white cursor-pointer font-extrabold rounded-full ml-2 mt-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                                  </svg> 
                                </button>
                            
                              </div>  

                            </div>
                          ))}
                      </div>
                    )}
                  </FieldArray>
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[150px] mt-5 h-8 border border-black hover:bg-blue-900 p-2.5 rounded-md mb-3 hover:text-white  flex justify-center items-center ml-3">
                    <button type="submit">+ Add</button>

                    </div>
                  </div>
                    </Form>
                )}
                </Formik>
                </>                
              }

              {mode==='LCL'&&

                <>
                <Formik
                  initialValues={initialLCLValues}
                  validationSchema={userSchema6}
                  onSubmit={async (values) => {
                    console.log(values);
                    // setCheckCargo("added");
                    // setTab(!tab);
                    // obj1 = {...initialValues, ...values}
                    // console.log(obj1) 
                    // newobj1 = {...obj1, loading: origin, desty: destination}
                    // console.log(newobj1)
                    // lclCargo = [...newobj1.Packages]        
                    // console.log(lclCargo)       

                  }}
                >
        
                {({ values }) => (
                  <Form>
                  <FieldArray name="Packages">
                    {({remove, push}) => (
                      <div className='divide-y divide-solid divide-gray-400'>
                      {values.Packages?.length > 0 && 
                      values.Packages?.map((Package, index) => (
                            <div className='flex w-full justify-center items-center gap-2 p-3' key={index}>
                              <div className='p-3 text-sm flex flex-col gap-2'>
                                  <label htmlFor={`Packages.${index}.PKGStype`}>Packages type</label>
                                  <Field as="select" 
                                    name={`Packages.${index}.PKGStype`}
                                    className='text-center p-2 w-[100px] rounded-md border'>
                                    <option value="Box">Box</option>
                                    {/* <option value="Pallet">Pallet</option> */}
                                    <option value="Carton">Cartons</option>
                                    <option value="Crate">Cartons</option>

                                  
                                  </Field>
                                  <ErrorMessage name={`Packages.${index}.PKGStype`} component="div" className='text-[12px] text-red-600 mb-1'/>                                                  
                              </div>

                              <div className=' text-sm flex  justify-center items-center'>
                                <div className='flex flex-col gap-2'>
                                  <label htmlFor={`Packages.${index}.PKGScount`}>No: Packages</label>
                                    <Field
                                      name={`Packages.${index}.PKGScount`}
                                      placeholder=""
                                      type="number"
                                      className='text-center p-2 w-[100px] rounded-md border'
                                    />
                                    <ErrorMessage name={`Packages.${index}.PKGScount`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                </div>
                      
                              </div>  


                              <div className=' text-sm flex  justify-center items-center'>
                                <div className='flex flex-col gap-2'>
                                  <label htmlFor={`Packages.${index}.PKGSPLTcount`}>No: Pallets</label>
                                    <Field
                                      name={`Packages.${index}.PKGSPLTcount`}
                                      placeholder="Optional"
                                      type="number"
                                      className='text-center p-2 w-[100px] rounded-md border'
                                    />
                                    <ErrorMessage name={`Packages.${index}.PKGSPLTcount`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                </div>
                      
                              </div>  

                              <div className=' text-sm flex  justify-center items-center'>
                                <div className='flex flex-col gap-2'>
                                  <label htmlFor={`Packages.${index}.PKGSvolume`}>Gross Volume</label>
                                    <Field
                                      name={`Packages.${index}.PKGSvolume`}
                                      placeholder=""
                                      type="number"
                                      className='text-center p-2 w-[100px] rounded-md border'
                                    />
                                    <ErrorMessage name={`Packages.${index}.PKGSvolume`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                </div>                                     
                              </div>  

                              <div className=' text-sm flex  justify-center items-center'>
                                <div className='flex flex-col gap-2'>
                                  <label htmlFor={`Packages.${index}.PKGSGweight`}>Gross weight</label>
                                    <Field
                                      name={`Packages.${index}.PKGSGweight`}
                                      placeholder=""
                                      type="number"
                                      className='text-center p-2 w-[100px] rounded-md border'
                                    />
                                    <ErrorMessage name={`Packages.${index}.PKGSGweight`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                </div>                                     
                              </div> 

                              <div className='text-sm flex  justify-center items-center'>
                                <div className='flex flex-col gap-2'>
                                  <label htmlFor={`Packages.${index}.PKGSNweight`}>Net weight</label>
                                    <Field
                                      name={`Packages.${index}.PKGSNweight`}
                                      placeholder=""
                                      type="number"
                                      className='text-center p-2 w-[100px] rounded-md border'
                                    />
                                    <ErrorMessage name={`Packages.${index}.PKGSNweight`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                </div>

                                <button onClick={() => remove(index)} disabled={values.Packages.length===1}>
                                  <svg fill="none" stroke="currentColor" className='w-7 h-7 mb-3 bg-red-600 p-1 text-white cursor-pointer font-extrabold rounded-full ml-5 mt-5' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                  </svg>
                                </button>

                                <button onClick={() => push({ PKGStype: '', PKGScount:0, PKGSvolume:0, PKGSNweight:0, PKGSGweight:0})} >
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 mb-3 bg-green-600 p-1 text-white cursor-pointer font-extrabold rounded-full ml-2 mt-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                                  </svg> 
                                </button>
                            
                              </div>  

                              

                            </div>
                          ))}
                      </div>
                    )}
                  </FieldArray>
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[150px] mt-5 h-8 bg-blue-900 p-2 rounded-md mb-3 text-white font-bold flex justify-center items-center ml-3">
                    <button type="submit">+ Add</button>

                    </div>
                  </div>
                    </Form>
                )}
                </Formik>
                </>
              }                                              
            </div>}

          </div>   

        </div>
       
        </div>
      </div>
    </>
   
  )
}

export default BLD