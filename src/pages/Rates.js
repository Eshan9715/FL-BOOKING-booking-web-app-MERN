import axios from 'axios';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useState,useEffect } from 'react'
import AutoText from '../components/AutoText';
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import TextField from '@mui/material/TextField';

import {Eports, ports, shippingLines} from '../Data'
import route from '../assets/route.png'
import dollar from '../assets/dollar.png'


// import {MultipleInputs} from '../components/MultipleInputs';
import VesselInputs from '../components/VesselInputs';
// import { BasicDateTimePicker } from '../components/BasicDateTimePicker';
// import Success from '../components/Success';
// import ScheduleTile from '../components/ScheduleTile';
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import { TextInput } from '../components/TextInput';
import { BasicDatePicker } from '../components/BasicDatePicker';
import { userSchema7 } from '../components/userValidation';
import RateTile from '../components/RateTile';
import AlertRate from '../components/AlertRate';
import { useNavigate } from 'react-router-dom';

var rates = [];
var obj = {}
const Rates = () => {

    // const formArray = [1, 2, 3];
    // const [formNo, setFormNo] = useState(formArray[0])
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [discharge, setDischarge] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [viewRates, setViewRates] = useState([])

    const [id,setID] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      setID(localStorage.getItem("userID"))

      const getRates = ()=>{
        axios
        .get(`http://localhost:5000/api/rate`)
        .then((res) => {
          console.log(res.data);
          setViewRates(res.data.rates)
        })
        .catch(err=> {
          console.log(err);
        })     
      }
      getRates();
      
  }, []);

    const [shipline, setShipline] = useState('')
    // const [vessels, setVessels] = useState('')

    // const [ETAO, setETAO] = useState(dayjs(new Date()))
    // const [ETAD, setETAD] = useState(dayjs(new Date()))
    // const [FCLO, setFCLO] = useState(dayjs(new Date()))
    // const [FCLC, setFCLC] = useState(dayjs(new Date()))
    // const [BLCO, setBLCO] = useState(dayjs(new Date()))
    // const [VGMCO, setVGMCO] = useState(dayjs(new Date()))

    const [one, setOne] = useState(false);
    const[validDate, setValidDate] = useState(null);
    const [shmode, setShMode] = useState('')
    const [multiVal, setMultiVal] = useState('')
    const [go,setGo] = useState(false)

    const [search, setSearch] = useState('')
    const [catomode, setCatomode] = useState('Discharge')

    // const[oneV, setOneV] = useState(false)
    // const[twoV, setTwoV] = useState(false)

    const sendRRequest = async() =>{
        const newRate = {
          origin: origin,
          destination: destination,
          discharge: discharge,
          shipline:shipline,
          zipCode:zipcode,
          deliveryMode: shmode,
          validDate:validDate,
          remarks: multiVal,
          rates: rates.map((item) => ({
                  containerType: item.containerType,
                  rate: item.price,
                  })),
          user:id,

        }        
          axios
          .post("http://localhost:5000/api/rate/add",newRate)
          .then((res) => {
            // console.log(res);
            console.log(res.data);

          });     
      };


      // const next = () => {
      //   setGo(true);
      //     if(shmode==="CY / RAMP"){
      //       if(origin!=="" &&  discharge!==""&& shmode!==""&& shipline!=="" && destination!=='' && validDate!=="" &&  remarks!==""){
      //         setFormNo(formNo + 1)
      //       }
      //     }else if(shmode==="CY / DOOR"){
      //       if(origin!=="" &&  discharge!==""&& shmode!==""&& shipline!=="" && destination!=='' && zipcode!=='' && validDate!=="" &&  remarks!==""){
      //         setFormNo(formNo + 1)
      //       }
      //     }else{
      //       if(origin!=="" &&  discharge!==""&& shmode!==""&& shipline!=="" && validDate!=="" &&  remarks!==""){
      //         setFormNo(formNo + 1)
      //       }
      //     }
      //   }
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

      const finalSubmit = ()=>{
        setShowAlert(true);
      }

      const handleSend = () => {
          sendRRequest();
          navigate("/dashboard")
          // <PopupUI status='error' text='error' textError={error} />
       
      }

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
    <div className="min-h-screen w-screen flex overflow-auto text-black bg-gradient-to-b from-blue-500 to-gray-900">
      <div className='w-full flex'>
        <div className='w-[14%]'>
          <Sidenavbar role='ratesmanager'/>
        </div>

        <div className='w-[86%] min-h-screen p-4 flex'>
          <div className='w-full mt-[90px] h-full flex flex-col justify-start items-center'>
              <div className='w-[85%] flex justify-between items-center'>
                <div className="flex items-center justify-center text-center gap-2">
                <img src={dollar} alt='' className='w-[80px]' />
                <p className="text-xl sm:text-3xl text-white font-bold leading-none">Rate Schedule</p>
                <button onClick={()=>setOne(!one)}
                      className="flex items-center justify-center mt-1 w-[180px] px-4 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform bg-white border-2 rounded-md border-black hover:bg-orange-500 hover:border-none hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                      {!one===true? 
                      <><svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mr-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg><span> new rate </span>
                      </>:
                      <> <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mr-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
                          </svg><span> view history </span>
                      </>}
                </button> 
                </div>

                  {!one &&
                  <div className="flex items-center justify-center text-center gap-2 bg-white rounded-md px-3 py-1 shadow-md">
                    <FormControl sx={{ m: 1, minWidth: 150,borderRadius:2 }} size="small">
                      <InputLabel id="demo-select-small">Catogery</InputLabel>
                      <Select
                        value={catomode}
                          label="Catogery"
                          onChange={(e)=>setCatomode(e.target.value)}
                          className='py-0.5'
                      >
                      <MenuItem value={"Discharge"}>Discharge</MenuItem>
                        <MenuItem value={"Shipline"}>Shipline</MenuItem>
                        <MenuItem value={"Shipping mode"}>Shipping mode</MenuItem>
                        <MenuItem value={"Destination"}>Destination</MenuItem>
                      </Select>
                    </FormControl>
                  
                    <TextField label="Search" variant="outlined" size="small" className='border rounded-md py-1.5 mt-1 w-[300px]' value={search} onChange={(e)=>setSearch(e.target.value)}/>

                  </div>}
              </div>

              <div className='w-[90%] flex flex-col justify-between items-center'>
                {one?
        
                  <div className='w-[95%] flex justify-center items-center'>
                    <div className='w-full'>
                      
                      <div className='w-full bg-white px-8 py-4 rounded-md flex mt-3'>

                        <div className='w-1/3 flex justify-center flex-col items-center'>
                          <h3 className='font-semibold text-xl p-2'>Sailing Details</h3>
                          <img src={route} alt='' />
                        </div>

                        <div className='w-2/3 flex justify-center flex-col items-center'>
                          <div className='w-full grid grid-cols-2 gap-4'>

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

                      <div className='w-full my-2 bg-white px-8 py-2 rounded-md flex mt-2'>

                        <div className='w-1/3 flex justify-center flex-col items-center'>
                          <h3 className='font-semibold text-xl p-2'>Pricing Details</h3>
                          <img src={dollar} alt='' className='w-[180px]' />
                        </div>

                        <div className='w-2/3 flex justify-center flex-col items-center p-2'>
                          <div className='w-full grid grid-cols-2 gap-4'>

                          <div className='flex flex-col'>
                            <BasicDatePicker label={"Valid Date"} setDate={setValidDate} />
                          </div>

                          <div className='flex flex-col'>
                            <TextField
                              id="outlined-multiline-static"
                              label="Remarks"
                              multiline
                              value={multiVal}
                              defaultValue=""
                              onChange={e=>setMultiVal(e.target.value)}
                            />
                          { go===true && multiVal==="" && <p className='text-[13px] text-red-600 mb-1'>Add remarks here!</p>}
                          </div>
                          </div>
                          <div className='w-full border-2 my-2 mt-4'>
                          <Formik
                            initialValues={initialConRates}
                            validationSchema={userSchema7}
                            onSubmit={async (values) => {
                              console.log(values);
                              obj = {...initialConRates, ...values}
                              rates = [...obj.Rates]  
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
                                      <div className='flex w-full justify-center items-center gap-2 p-2' key={index}>
                                        <div className='w-[50%] p-2 text-sm flex flex-col gap-2  justify-center items-center'>
                                            <label htmlFor={`Rates.${index}.containerType`}>Container type</label>
                                            <Field as="select" 
                                              name={`Rates.${index}.containerType`}
                                              className='text-center p-2 w-full rounded-md border'>
                                              <option value="20 GP">20 GP</option>
                                              <option value="40 GP">40 GP</option>
                                              <option value="40 HC">40 HC</option>
                                              <option value="45 HC">45 HC</option>
                                              <option value="20 RG">20 RG</option>
                                              <option value="40 RG">40 RG</option>

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
                              <div className="w-[150px] mt-2 bg-orange-500 py-2 rounded-md mb-2 text-white font-bold flex justify-center items-center ml-3">
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
                        <button onClick={finalSubmit}
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
                    {catomode==='Discharge'?  <>
                    {viewRates?.filter((rat)=> search.toLowerCase()===''? rat: rat.discharge.toLowerCase().includes(search.toLowerCase())).map((rat)=>{
                      return(
                      <RateTile key={rat.id} 
                          origin={rat.origin}
                          destination={rat.destination}
                          discharge={rat.discharge}
                          vdate={rat.validDate}
                          shipline={rat.shipline}
                          deliveryMode={rat.deliveryMode}
                          rates={rat.rates}
                          remarks={rat.remarks}
                          zipcode={rat.zipCode}

                      />

                    )})} </> : catomode==='Shipline'? <>
                    {viewRates?.filter((rat)=> search.toLowerCase()===''? rat: rat.shipline.toLowerCase().includes(search.toLowerCase())).map((rat)=>{
                      return(
                      <RateTile key={rat.id} 
                          origin={rat.origin}
                          destination={rat.destination}
                          discharge={rat.discharge}
                          vdate={rat.validDate}
                          shipline={rat.shipline}
                          deliveryMode={rat.deliveryMode}
                          rates={rat.rates}
                          remarks={rat.remarks}
                          zipcode={rat.zipCode}

                      />

                    )})} </> : catomode==='Shipping mode'? <>
                    {viewRates?.filter((rat)=> search.toLowerCase()===''? rat: rat.deliveryMode.toLowerCase().includes(search.toLowerCase())).map((rat)=>{
                      return(
                      <RateTile key={rat.id} 
                          origin={rat.origin}
                          destination={rat.destination}
                          discharge={rat.discharge}
                          vdate={rat.validDate}
                          shipline={rat.shipline}
                          deliveryMode={rat.deliveryMode}
                          rates={rat.rates}
                          remarks={rat.remarks}
                          zipcode={rat.zipCode}

                      />

                    )})} </> : catomode==='Destination'? <>
                    {viewRates?.filter((rat)=> search.toLowerCase()===''? rat: rat.destination.toLowerCase().includes(search.toLowerCase())).map((rat)=>{
                      return(
                      <RateTile key={rat.id} 
                          origin={rat.origin}
                          destination={rat.destination}
                          discharge={rat.discharge}
                          vdate={rat.validDate}
                          shipline={rat.shipline}
                          deliveryMode={rat.deliveryMode}
                          rates={rat.rates}
                          remarks={rat.remarks}
                          zipcode={rat.zipCode}

                      />

                    )})} </> :  <>
                    {viewRates.map((rat)=>{
                      return(
                      <RateTile key={rat.id} 
                          origin={rat.origin}
                          destination={rat.destination}
                          discharge={rat.discharge}
                          vdate={rat.validDate}
                          shipline={rat.shipline}
                          deliveryMode={rat.deliveryMode}
                          rates={rat.rates}
                          remarks={rat.remarks}
                          zipcode={rat.zipCode}

                      />
                    )})} </>
                    }

                  </>

                }

              </div>

              <AlertRate title={"New rate details"} send={handleSend} show={showAlert} close={()=>setShowAlert(false)} origin={origin} discharge={discharge} shipline={shipline} vdate={validDate} rates={rates} type={shmode} remarks={multiVal} destination={destination} zipcode={zipcode}/>


              
          </div>


        </div>
      </div>
    </div>
    </>

      
      
      
      
      
      
      
      
      
      
      
      
    
    
    
  )
}

export default Rates


