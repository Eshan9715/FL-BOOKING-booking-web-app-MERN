import axios from 'axios';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react'
import AutoText from '../components/AutoText';
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';

import {Eports, ports, shippingLines, seaRates} from '../Data'
import route from '../assets/route.png'
import vessel from '../assets/vessel.jpg'
import times from '../assets/times.png'
import dollar from '../assets/dollar.png'


import {MultipleInputs} from '../components/MultipleInputs';
import VesselInputs from '../components/VesselInputs';
import { BasicDateTimePicker } from '../components/BasicDateTimePicker';
import Success from '../components/Success';
import ScheduleTile from '../components/ScheduleTile';
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import { TextInput } from '../components/TextInput';
import { BasicDatePicker } from '../components/BasicDatePicker';
import { userSchema7 } from '../components/userValidation';
import RateTile from '../components/RateTile';
import AlertRate from '../components/AlertRate';

var rates = [];
const Rates = () => {

    const formArray = [1, 2, 3];
    const [formNo, setFormNo] = useState(formArray[0])
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [discharge, setDischarge] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [remarks, setRemarks] = useState('')
    const [showAlert, setShowAlert] = useState(false)




    const [shipline, setShipline] = useState('')
    const [vessels, setVessels] = useState('')

    const [ETAO, setETAO] = useState(dayjs(new Date()))
    const [ETAD, setETAD] = useState(dayjs(new Date()))
    const [FCLO, setFCLO] = useState(dayjs(new Date()))
    const [FCLC, setFCLC] = useState(dayjs(new Date()))
    const [BLCO, setBLCO] = useState(dayjs(new Date()))
    const [VGMCO, setVGMCO] = useState(dayjs(new Date()))

    const [one, setOne] = useState(false);
    const[validDate, setValidDate] = useState(new Date());
    const [shmode, setShMode] = useState('')
    const [multiVal, setMiltiVal] = useState('')
    const [go,setGo] = useState(false)

    const[oneV, setOneV] = useState(false)
    const[twoV, setTwoV] = useState(false)


    console.log(ETAO)
    console.log(ETAO)


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
          .post("http://localhost:5000/api/shipper/signup",newShipper)
          .then((res) => {
            // console.log(res);
            console.log(res.data);
            // localStorage.setItem("userID",res.data.shipper._id)
            // localStorage.setItem("userName",res.data.shipper.firstName)
            // localStorage.setItem("userImage",res.data.shipper.image)
            // localStorage.setItem("userEmail",res.data.shipper.email)


          });     
      };


      const next = () => {
        setGo(true);
          if(shmode==="CY / RAMP"){
            if(origin!=="" &&  discharge!==""&& shmode!==""&& shipline!=="" && destination!=='' && validDate!=="" &&  remarks!==""){
              setFormNo(formNo + 1)
            }
          }else if(shmode==="CY / DOOR"){
            if(origin!=="" &&  discharge!==""&& shmode!==""&& shipline!=="" && destination!=='' && zipcode!=='' && validDate!=="" &&  remarks!==""){
              setFormNo(formNo + 1)
            }
          }else{
            if(origin!=="" &&  discharge!==""&& shmode!==""&& shipline!=="" && validDate!=="" &&  remarks!==""){
              setFormNo(formNo + 1)
            }
          }
        }
        // setFormNo(formNo + 1)



         
        //   setOneV(false)
        //   if(!setOneV){
        // }

        // }
        // else if(formNo===2){
        //   if(validDate==="" && remarks==="" ){
        //       setTwoV(true)
        //   }

        //   if(!setOneV){
        //     setFormNo(formNo + 1)
        //   }

        // }
        

      
      // const pre = () => {
      //   setFormNo(formNo - 1)
      // }

      // const oneLast = (values)=>{
      //     next();
      // }

      const initialConRates = {
        Rates: [
          {  
            containerType: '',
            price: '',
          },
        ],
      };

      console.log(validDate)


  return (
    <>
    <Navbar/>
    <Sidenavbar role='ratesmanager'/>
    <div className="min-h-screen w-screen flex overflow-auto text-black bg-gradient-to-b from-blue-500 to-gray-900">
      <div className='w-[98%] mt-[80px] ml-[250px] '>

        <div className=" w-[95%] flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-2xl my-4 items-center justify-center">
          <div className='w-full flex'>
            <div className=' w-[100%] flex'>
              <div className="w-full flex items-center justify-center text-center gap-2">
                <img src={dollar} alt='' className='w-[80px]' />
                <p className="text-xl sm:text-3xl text-sky-900 font-bold leading-none">Rate Schedule</p>
                <button onClick={()=>setOne(!one)}
                      className="flex items-center justify-center mt-1 w-[100px] px-4 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform bg-white border-2 rounded-md border-black hover:bg-orange-500 hover:border-none hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                      <span> + New </span>
                </button> 
              </div>
              
            </div>
            
          </div>
        </div>

      {!one?
      
        <div className='w-[95%] flex justify-center items-center'>
          <div className='w-full'>
            
            <div className='w-full my-2 bg-white px-8 py-2 rounded-md flex'>

              <div className='w-1/3 flex justify-center flex-col items-center'>
                <h3 className='font-semibold text-xl p-2'>Sailing Details</h3>
                <img src={route} alt='' className='my-5' />
              </div>

              <div className='w-2/3 flex justify-center flex-col items-center'>
                <div className='w-full grid grid-cols-2 gap-6'>

                <div className='flex flex-col'>
                  <AutoText options={Eports} title="Port of Origin"  setPortData={setOrigin}/>                        
                  {origin==='' && go===true &&  <p className='text-[13px] text-red-600 mt-1'>Add your origin port!</p>}
                </div>

                <div className='flex flex-col'>
                  <AutoText options={ports} title="Port of Discharge" setPortData={setDischarge}/>
                  {discharge==='' && go===true &&  <p className='text-[13px] text-red-600 mb-1'>Add your discharge port!</p>}
                </div>


                <div className='flex flex-col'>
                  <Box sx={{ width: '100%'}}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Delivery Mode</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={mode}
                        label="Delivery Mode"
                        value={shmode}
                        onChange={(e)=>setShMode(e.target.value)}
                      
                    >
                    <MenuItem value={"CY / CY"}>CY / CY</MenuItem>
                    <MenuItem value={"CY / CFS"}>CY / CFS</MenuItem>
                    <MenuItem value={"CY / DOOR"}>CY / DOOR</MenuItem>
                    <MenuItem value={"CY / RAMP"}>CY / RAMP</MenuItem>
                    <MenuItem value={"CFS / CFS"}>CFS / CFS</MenuItem>
                    {/* <MenuItem value={"Ex: works"}>Ex: works</MenuItem> */}
                    <MenuItem value={"FCL / FCL"}>FCL / FCL</MenuItem>
                    <MenuItem value={"FCL / LCL"}>FCL / LCL</MenuItem>
                    <MenuItem value={"LCL / LCL"}>LCL / LCL</MenuItem>

                      </Select>
                    </FormControl>
                  </Box> 

                {shmode==='' &&  go===true  && <p className='text-[13px] text-red-600'>Add your delivery Mode!</p>}
                </div>


                <div className='flex flex-col'>

                  <VesselInputs options={shippingLines} title="Shipping line"  setVesselData={setShipline}/>  
                  {shipline==='' && go===true &&  <p className='text-[13px] text-red-600 mb-1'>Add your shipping line!</p>}
                </div>


                {((shmode==="CY / RAMP") || (shmode==="CY / DOOR")) && <div className='flex flex-col'>

                <TextInput label={"Destination"} setValue={setDestination}/>
                {destination==='' && go===true &&  <p className='text-[13px] text-red-600 mb-1'>Add your destination!</p>}
                </div>}


                {shmode===("CY / DOOR") &&<div className='flex flex-col'>

                <TextInput label={"Zip code"} setValue={setZipcode}/>
                {zipcode==='' && go===true &&  <p className='text-[13px] text-red-600 mb-1'>Add your zip code!</p>}
                </div>}

              

                </div>
              </div>

            </div>

            <div className='w-full my-4 bg-white px-8 py-5 rounded-md flex mt-8'>

              <div className='w-1/3 flex justify-center flex-col items-center'>
                <h3 className='font-semibold text-xl p-2'>Pricing Details</h3>
                <img src={dollar} alt='' className='w-[180px]' />
              </div>

              <div className='w-2/3 flex justify-center flex-col items-center p-3'>
                <div className='w-full grid grid-cols-2 gap-6'>

                <div className='flex flex-col'>
                  <BasicDatePicker label={"Valid Date"} setTime={setValidDate} />
                </div>

                <div className='flex flex-col'>
                  <TextField
                    id="outlined-multiline-static"
                    label="Remarks"
                    multiline
                    value={multiVal}
                    defaultValue=""
                    onChange={e=>setMiltiVal(e.target.value)}
                  />
                { go===true && multiVal==="" && <p className='text-[13px] text-red-600 mb-1'>Add remarks here!</p>}
                </div>
                </div>
                <div className='w-full border-2 my-3 mt-8'>
                <Formik
                  initialValues={initialConRates}
                  validationSchema={userSchema7}
                  onSubmit={async (values) => {
                    console.log(values);
                    rates = [...values]
                    console.log(rates)

                    // setCheckCargo("added");
                    // setTab(!tab);
                    // obj = {...initialValues, ...values}
                    // console.log(obj)
                    // newobj = {...obj, loading: origin, desty: destination}
                    // fclCargo = [...newobj.Rates]        
                    // console.log(fclCargo)

                  }}
                >

                {({ values }) => (
                  <Form>
                  <FieldArray name="Rates">
                    {({remove, push}) => (
                      <div className='divide-y divide-solid divide-gray-400'>
                        {values.Rates?.length > 0 &&
                          values.Rates?.map((rate, index) => (
                            <div className='flex w-full justify-center items-center gap-2 p-3' key={index}>
                              <div className='w-[50%] p-3 text-sm flex flex-col gap-2  justify-center items-center'>
                                  <label htmlFor={`Rates.${index}.containerType`}>Container type</label>
                                  <Field as="select" 
                                    name={`Rates.${index}.containerType`}
                                    className='text-center p-2 w-full rounded-md border'>
                                    <option value="20'GP">20'GP</option>
                                    <option value="40'GP">40'GP</option>
                                    <option value="40'HC">40'HC</option>
                                    <option value="45'HC">45'HC</option>
                                    <option value="20'RFG">20'RFG</option>
                                    <option value="40'RFG">40'RFG</option>

                                  </Field>
                                  <ErrorMessage name={`Rates.${index}.containerType`} component="div" className='text-[12px] text-red-600 mb-1'/>                                                  
                              </div>

                              <div className='w-[50%] text-sm flex  justify-center items-center'>
                                <div className='flex flex-col gap-2'>
                                  <label htmlFor={`Rates.${index}.price`}>Price</label>
                                    <Field
                                      name={`Rates.${index}.price`}
                                      placeholder=""
                                      type="number"
                                      className='text-center p-2 w-full rounded-md border'
                                    />
                                    <ErrorMessage name={`Rates.${index}.price`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                </div>

                                <button onClick={() => remove(index)} disabled={values.Rates.length===1}>
                                  <svg fill="none" stroke="currentColor" className='w-7 h-7 mb-3 bg-red-600 p-1 text-white cursor-pointer font-extrabold rounded-full ml-5 mt-5' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                  </svg>
                                </button>

                                <button onClick={() => push({containerType: '', price: ''})} >
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
                    <div className="w-[150px] mt-5 bg-orange-500 py-2.5 rounded-md mb-3 text-white font-bold flex justify-center items-center ml-3">
                    <button type="submit"> + Add</button>

                    </div>
                  </div>
                    </Form>
                )}
                </Formik>
                </div>

              
              </div>

            </div>

            <div className='w-full flex justify-center items-center mb-10'>
              <button onClick={next}
                className="flex items-center justify-center w-1/3 px-6 py-3 text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Submit </span>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rtl:-scale-x-100 mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
              </button>
            </div>
 

          </div> 

         
        </div>

        :

        <>
          <div className=" w-[95%] flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-2xl my-2 items-center justify-center">
            <div className='w-full flex justify-between items-center'>

              <div className='w-full flex'>
                <Box sx={{ width: 120, borderRadius:25}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Catogery</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={mode}
                      label="Catogery"
                      // onChange={handleChange}

                    >
                      <MenuItem value={"Route"}>Route</MenuItem>
                      <MenuItem value={"ETA"}>ETA</MenuItem>
                      <MenuItem value={"Shipline"}>Shipline</MenuItem>

                    </Select>
                  </FormControl>
                </Box>
                <form class="w-1/3 flex items-center ml-3">   
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                </form>
              </div>
              <Box sx={{ width: 180, borderRadius:25}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={mode}
                      label="Sort by"
                      // onChange={handleChange}

                    >
                      <MenuItem value={"Fastest Route"}>Fastest Route</MenuItem>
                      <MenuItem value={"Lowest rate"}>Lowest rate</MenuItem>

                    </Select>
                  </FormControl>
                </Box>
            </div>
          </div>

          {seaRates?.map((rat,index)=>{
            return(
            <RateTile key={index} 
                origin={rat.origin}
                destination={rat.destination}
                discharge={rat.discharge}
                vdate={rat.vdate}
                shipline={rat.shipline}
                deliveryMode={rat.deliveryMode}
                rates={rat.rates}
                remarks={rat.remarks}
                zipcode={rat.zipCode}

            />

          )})}

        </>
        
        }

        <AlertRate title={"New rate details"} show={showAlert} close={()=>showAlert(false)} origin={origin} discharge={discharge} shipline={shipline} vdate={validDate} rates={rates} remarks={remarks}/>

    </div>

    </div>
    
    </>
  )
}

export default Rates


