import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';
import AutoText from '../components/AutoText';
import {Eports, ports, recentSearches, seaRates} from '../Data'
import { userSchema5, userSchema6 } from '../components/userValidation';
import axios from 'axios';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import {useSelector} from 'react-redux';
import Sidenavbar from '../components/Sidenavbar';
import AlertMessage from '../components/AlertQuery';
import { BasicDatePicker } from '../components/BasicDatePicker';
import { Dayjs } from 'dayjs';
import AlertQuery from '../components/AlertQuery';
import PopupUI from '../components/PopupUI';
import RateTile from '../components/RateTile';
import SliderQueries from '../sliders/SliderQueries';
import QueryTile from '../components/QueryTile';

var obj = {};
var obj1 = {};
var newobj = {};
var newobj1 = {};

var fclCargo = []
var lclCargo = []
var finalizedCargo = []

const BQuering = () => {
  // const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const currentUserID = localStorage.getItem('userID');
  const navigate = useNavigate();

  const [role,setRole] = useState("");
  const [id,setID] = useState("");
  const [showAlert, setShowAlert] = useState(false)
  const [userData, setUserData] = useState([])

  const [fqueryData, setFQueryData] = useState([])
  const [lqueryData, setLQueryData] = useState([])


  useEffect(() => {
      setRole(localStorage.getItem("role"))
      setID(localStorage.getItem("userID"))

      const getQueries = ()=>{
        axios
        .get(`http://localhost:5000/api/fclquery`)
        .then((res) => {
          console.log(res.data);
          setFQueryData(res.data.fclquries)
        })
        .catch(err=> {
          console.log(err);
        })     

        axios
        .get(`http://localhost:5000/api/lclquery`)
        .then((res) => {
          // console.log(res.data);
          setLQueryData(res.data)
        })
        .catch(err=> {
          console.log(err);
        })   
      }
      getQueries();
      
  }, []);

  // console.log(fqueryData.fclquries)


  const initialValues = {
    loading: '',
    desty: '',
  }

  console.log(userData.assignedTo)

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

  const handleClose = () =>{
    setShowAlert(false)
  }

  const getUser = ()=>{
    axios
    .get(`http://localhost:5000/api/user/${id}`)
    .then((res) => {
      // console.log(res.data);
      setUserData(res.data)
    })
    .catch(err=> {
      console.log(err);
    })     

  }

  const [origin, setOrigin] = useState(initialValues.loading)
  const [destination, setDestination] = useState(initialValues.desty)
  const [mode, setMode] = useState('')
  const [error, setError] = useState('')

  const [rdate, serRdate] = useState(null)
  console.log(rdate)


  // const navigate = useNavigate();

  const [tab, setTab] = useState(false);
  const [checkCargo, setCheckCargo] = useState('');
  const [search, setSearch] = useState(false);

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  const showChance = ()=>{
    setTab(!tab);
  }

  console.log(origin)
  console.log(destination)
  console.log(mode)


  const handleQuery = () =>{
    setSearch(true)
    getUser();
    if(checkCargo==="added"){
      console.log("done")
      finalizedCargo = mode==="FCL"? [...fclCargo] : [...lclCargo]
      setShowAlert(true)
      // navigate('/')
    }else{
      setCheckCargo("failed")
    }
   
             
  }

  const sendLCLRequest = async() =>{
    const newLQuery = {
      origin: origin,
      destination: destination,
      containerMode: mode,

      cargoLCL:
      lclCargo.products.map((item) => ({
        packageType: item.PKGStype,
        packageCount: item.PKGScount,
        packageVolume: item.PKGSvolume,
        packageGrossWeight: item.PKGSGweight,
        packageNetWeight: item.PKGSNweight,

      })),
      user: currentUserID,
      receiver: userData.assignedTo,
      rDate: rdate
    }        
      axios
      .post("http://localhost:5000/api/lclquery/add",newLQuery)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err=> {
        console.log(err);
        // setError(err.response.data.message);
        // console.log(error);


      })     
  };

  const sendFCLRequest = async() =>{
    const newFQuery = {
      origin: origin,
      destination: destination,
      containerMode: mode,

      cargoFCL: 
      fclCargo.map((item) => ({
        containerType: item.containerType,
        quantity: item.quantity,
      })),

      user: currentUserID,
      receiver: userData.assignedTo,
      rDate: rdate

    }        
      axios
      .post("http://localhost:5000/api/fclquery/add",newFQuery)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err=> {
        console.log(err);
        // setError(err.response.data.message);
        // console.log(error);

      })     
  };



  const handleSend = () => {
    if(error===''){
      if(mode==="FCL"){
        sendFCLRequest();
      }else{
        sendLCLRequest();
      }
      navigate("/dashboard")
      // <PopupUI status='error' text='error' textError={error} />
    }else{

    }
  }
  const [one, setOne] = useState(false);



  return (
    <>
      <Navbar/>
      <div className='w-screen min-h-screen overflow-auto bg-gradient-to-b from-blue-500 to-gray-900 justify-center items-center'>
        <div className='w-full flex'>
          <div className='w-[14%]'>
            <Sidenavbar role={role} />
          </div>

          <div className='w-[86%] min-h-screen p-4'>
            <div className='w-full h-full flex flex-col justify-center items-center'>

            {one?
              <>
                <p className='text-4xl text-center font-semibold text-white'>Get Your Instant Freight Quotes <span className='text-white text-3xl px-3 py-2 rounded-xl bg-red-600 font-semibold'>Online.</span></p>

                <div className='mt-2 w-full flex flex-col justify-center items-center gap-8'>
                  <button onClick={()=>setOne(!one)}
                        className="flex items-center justify-center mt-1 w-[200px] px-4 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform bg-white border-2 rounded-md  hover:bg-orange-500 hover:border-none hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mr-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
                          </svg>
                        <span>view history </span>
                  </button>

                  <div className=' bg-white backdrop-blur-sm border rounded-xl p-3 w-4/5 my-8'>

                    <div className='w-full my-2 grid grid-cols-3 gap-x-10 gap-y-5 px-4 items-center'>
                        <div className='flex flex-col'>
                          <AutoText options={Eports} title="Origin"  setPortData={setOrigin}/>
                          {origin==='' && (checkCargo==='added' || search===true) && <p className='text-[13px] text-red-600 mb-1'>Add your origin port!</p>}
                        </div>     

                        <div className='flex flex-col'>
                          <AutoText options={ports} title="Destination" setPortData={setDestination}/>
                          {destination==='' && (checkCargo==='added' || search===true) && <p className='text-[13px] text-red-600 mb-1'>Add your destination port!</p>}
                        </div>  

                        <div className='flex justify-center items-center'>
                          <BasicDatePicker label={"Cargo readyness date"} setDate={serRdate}/>

                        </div>    

                        <div className='flex flex-col'>
                        <Box sx={{ width: '100%' }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Container Mode</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={mode}
                              label="Container Mode"
                              onChange={handleChange}

                            >
                              <MenuItem value={"FCL"}>FCL</MenuItem>
                              <MenuItem value={"LCL"}>LCL</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>

                        {destination==='' && (checkCargo==='added' || search===true) && <p className='text-[13px] text-red-600 mb-1'>Add your destination port!</p>}
                          </div>      


                      <div className='w-full flex justify-start items-center flex-col'>
                      
                        <button onClick={showChance} className='w-full'>
                          <p className='text-sm font-semibold flex gap-2 px-4 items-center justify-center hover:bg-red-500 hover:text-white border-black py-4 border-2 rounded-lg'>Add Cargo <span>  <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-4 h-4 mt-1 font-extrabold cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                          </svg></span></p>
                      
                        </button>
                        {checkCargo==='failed' && <p className='text-[13px] text-red-600 mb-1'>Add your cargo before continue!</p>}
                      </div>

                    
                      <button onClick={handleQuery}
                        className="flex items-center justify-between w-full h-[55px] px-4 py-1 text-sm font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Search results</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                      </button> 
                    </div>

                    <div className={`z-[90] ${tab? "absolute": "hidden"}  top-[170px] w-[700px] left-[38%] my-4 text-base shadow-md list-none bg-white  rounded-lg`}>
                            {/* <div class="flex w-full justify-center  items-center">
                              <span class={`px-2.5 py-3 flex justify-center items-center text-center text-sm font-medium cursor-pointer w-1/2 ${left? "bg-gray-500 text-white":" bg-white text-black"} `} onClick={()=>conMode("FCL")}>FCL</span>
                              <span class={`px-2.5 py-3 flex text-sm truncate cursor-pointer font-bold justify-center items-center w-1/2 h-full text-center ${!left? "bg-gray-500 text-white":" bg-white text-black"}`} onClick={()=>conMode("LCL")}>LCL</span>
                            </div> */}

                          {mode==='FCL'&&
                            <>
                            <Formik
                              initialValues={initialConValues}
                              validationSchema={userSchema5}
                              onSubmit={async (values) => {
                                console.log(values);
                                setCheckCargo("added");
                                setTab(!tab);
                                obj = {...initialValues, ...values}
                                console.log(obj)
                                newobj = {...obj, loading: origin, desty: destination}
                                console.log("newObj" + newobj)
                                fclCargo = [...newobj.Containers]        
                                console.log(fclCargo)

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
                                                  <option value="20 GP">20 GP</option>
                                                  <option value="40 GP">40 GP</option>
                                                  <option value="40 HC">40 HC</option>
                                                  <option value="45 HC">45 HC</option>
                                                  <option value="20 RG">20 RG</option>
                                                  <option value="40 RG">40 RG</option>

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
                                <div className="w-[150px] mt-5 h-8 bg-orange-500 p-2 rounded-md mb-3 text-white font-bold flex justify-center items-center ml-3">
                                <button type="submit">Search</button>

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
                                setCheckCargo("added");
                                setTab(!tab);
                                obj1 = {...initialValues, ...values}
                                console.log(obj1) 
                                newobj1 = {...obj1, loading: origin, desty: destination}
                                console.log(newobj1)
                                lclCargo = [...newobj1.Packages]        
                                console.log(lclCargo)       

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
                                                <option value="Pallet">Pallet</option>
                                                <option value="Cartons">Cartons</option>
                                              
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
                                <div className="w-[150px] mt-5 h-8 bg-orange-500 p-2 rounded-md mb-3 text-white font-bold flex justify-center items-center ml-3">
                                <button type="submit">Search</button>

                                </div>
                              </div>
                                </Form>
                            )}
                            </Formik>
                            </>
                          }                                              
                    </div>
                  </div>          
                </div>  
              </>:

              <>
              <div className=" w-full mt-[80px] flex flex-col p-2  my-4 items-center justify-center">
             
                  <div className="w-full flex items-center justify-center text-center gap-2">
                    {/* <img src={dollar} alt='' className='w-[80px]' /> */}
                    <p className="text-xl sm:text-3xl text-white font-semibold leading-none">Queries Collection</p>
                    <button onClick={()=>setOne(!one)}
                          className="flex items-center justify-center mt-1 w-[150px] px-4 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform bg-white border-2 rounded-md hover:bg-orange-500 hover:border-none hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md">
                          <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mr-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span> New Query </span>
                    </button> 
                  </div>
                  
            </div>
            <div className='w-[90%]'>
            {fqueryData?.map((obj,index)=>(
              <QueryTile key={index}
                  OportName={obj.origin} 
                  DportName={obj.destination} 
                  containerMode={obj.containerMode}
                  cargos={obj.cargoFCL} 
                  status={obj.status}
                  rDate={obj.rDate}
                  savedDate = {obj.createdAt}
              />
            ))}
            </div>

              </>
            }
            </div>

              <AlertQuery title={"Query Summery"}  send={handleSend} origin={origin} rDate={rdate} show={showAlert} close={handleClose} destination={destination} type={mode} cargos={finalizedCargo}/>
            

          </div>

        </div>
      
      </div>

    </>
  )
}

export default BQuering