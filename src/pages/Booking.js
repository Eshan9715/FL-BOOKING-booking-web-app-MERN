import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { TextForum } from '../components/TextForum';
// import { authActions } from '../store';
// import { useNavigate } from 'react-router-dom';
import AutoText from '../components/AutoText';
import {ports} from '../Data'
import { userSchema5 } from '../components/userValidation';
import { v4 as uuidv4 } from 'uuid';
import Select from '../components/Select';
import { HoriText } from '../components/HoriText';

var arr = {};
var newarr = {};

const Booking = () => {
  const [left,setLeft] = useState(true);
  const optionstype = [{key:1, value:"Box"}, {key:2, value:"Pallet"}]
  const initialValues = {
    loading: '',
    desty: '',
  }

  const initialConValues = {
    Containers: [
      {  
        id: uuidv4(),
        containerType: '',
        quantity: '',
      },
    ],
  };

  const [origin, setOrigin] = useState(initialValues.loading)
  const [destination, setDestination] = useState(initialValues.desty)

  // const navigate = useNavigate();

  const conMode = (type) =>{
    type==="FCL"? setLeft(true) : setLeft(false);
  }

  const [tab, setTab] = useState(false);
  const [mintab, setminTab] = useState(false);

  const [checkCargo, setCheckCargo] = useState('');
  const [search, setSearch] = useState(false);
  
  const showChance = ()=>{
    setTab(!tab);
  }
  const showmintab = ()=>{
    setminTab(!mintab)
  }

  console.log(origin)
  console.log(destination)


  const handleQuery = () =>{
    setSearch(true)
    if(checkCargo==="added"){
      console.log("done")
      // navigate('/')
    }else{
      setCheckCargo("failed")
    }
      // sendRequest(values)
              //   .then(()=>dispatch(authActions.login()))
              //   .then(()=>navigate('/rules'))                       
              //   .then(()=>console.log("Registration Successfull!"))
  }


  return (
    <>
    <Navbar/>
    <div className="min-h-screen overflow-auto bg-gradient-to-b from-blue-500 to-gray-900 justify-center items-center flex flex-col">
      <p className='text-4xl font-semibold text-white'>Get Your Instant Freight Quotes <span className='text-white text-3xl px-3 py-2 rounded-xl bg-red-600 font-semibold'>Online.</span></p>

      <div className='mt-16 w-full flex justify-center items-center'>
        <div className='bg-white backdrop-blur-sm border rounded-xl p-3  w-3/4'>

        <div className='my-2 grid grid-cols-4 gap-5 px-4 items-center'>
            <div className='flex flex-col'>
            <AutoText options={ports} title="Origin"  setPortData={setOrigin}/>
            {origin==='' && (checkCargo==='added' || search===true) && <p className='text-[13px] text-red-600 mb-1'>Add your origin port!</p>}
            </div>     

            <div className='flex flex-col'>
            <AutoText options={ports} title="Destination" setPortData={setDestination}/>
            {destination==='' && (checkCargo==='added' || search===true) && <p className='text-[13px] text-red-600 mb-1'>Add your destination port!</p>}
              </div>      

          <div className='flex justify-start items-center flex-col'>
          
            <button onClick={showChance}>
              <p className='text-sm font-semibold flex gap-3 px-16 items-center justify-center mt-6 hover:bg-red-500 hover:text-white border-black py-4 border-2 rounded-lg'>Add Cargo <span>  <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-4 h-4 mt-1 font-extrabold cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg></span></p>
          
            </button>
            {checkCargo==='failed' && <p className='text-[13px] text-red-600 mb-1'>Add your cargo before continue!</p>}
          </div>

          <button onClick={handleQuery}
            className="flex items-center mt-6 justify-between w-3/4 h-[55px] px-4 py-1 text-sm font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            <span>Search results</span>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
            </svg>
          </button> 
        </div>

        <Formik
          initialValues={initialConValues}
          validationSchema={userSchema5}
          onSubmit={async (values) => {
            console.log(values);
            setCheckCargo("added");
            setTab(!tab);
            arr = {...initialValues, ...values}
            // setQuery({...query, ...values})
            console.log(arr)
            newarr = {...arr, loading: origin, desty: destination}
            console.log(newarr)            

          }}
        >
          {({ values }) => (
            <Form>

              <div class={`z-[90] ${tab? "absolute": "hidden"}  top-[110px] w-[600px] left-[47%] my-4 text-base shadow-md list-none bg-white divide-y divide-gray-300 rounded-lg`}>
                <div class="flex w-full justify-center  items-center">
                  <span class={`px-2.5 py-3 flex justify-center items-center text-center text-sm font-medium cursor-pointer w-1/2 ${left? "bg-gray-500 text-white":" bg-white text-black"} `} onClick={()=>conMode("FCL")}>FCL</span>
                  <span class={`px-2.5 py-3 flex text-sm truncate cursor-pointer font-bold justify-center items-center w-1/2 h-full text-center ${!left? "bg-gray-500 text-white":" bg-white text-black"}`} onClick={()=>conMode("LCL")}>LCL</span>
                </div>

              {left? 
                <>
                  <FieldArray name="Containers">
                    {({remove, push}) => (
                      <div className='divide-y divide-solid divide-gray-400'>
                        {values.Containers.length > 0 &&
                          values.Containers.map((container, index) => (
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

                                <button onClick={() => push({id:uuidv4(), containerType: '', quantity: '' })} >
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
                </>                
                :
                <>
                  <div className='flex w-full justify-center items-center gap-1'>
                  <div className='w-1/2 px-2 py-2'>
                    <Select label="Package type" name= "PKGtype" type="text" options={optionstype} />
                    </div>
                    <div className='w-1/2 px-2 py-2'>
                      <TextForum label="No: Packages" name="count" type="number" placeholder="1" min="1" />
                    </div>
                    <div className='w-1/2 px-2 py-2'>
                      <TextForum label="Gross vol: [cbm]" name="volume" type="number" placeholder="1" min="1" />
                    </div>         
                    <div className='w-1/2 px-2 py-2'>
                      <TextForum label="Gross wei: [Kg]" name="weight" type="number" placeholder="1" min="1" />
                    </div>            
                  </div>

              
                  <p className='text-center'>or</p>
                  <div className="w-full flex justify-center items-center mb-5">
                      <div className="w-[150px] mt-5 h-8 bg-gray-500 p-2 text-white rounded-md font-bold flex justify-center items-center ml-3">
                        <button onClick={showmintab}>Calculate</button>

                      </div>

                    
                  </div>

                  <div class={`z-[95] ${mintab? "absolute": "hidden"}  top-[240px] w-[500px] right-12 my-4 text-base shadow-md list-none bg-white divide-y divide-gray-300 rounded-t-lg mb-5`}>
                        <div class="flex w-full justify-center  items-center">
                          <span class="px-2.5 py-3 flex justify-center items-center text-center text-sm font-medium cursor-pointer w-full bg-orange-500 text-white" >Calculate Gross volume & weight</span>
                        </div>
                        <div className='flex flex-col justify-center items-center p-3'>
                          <HoriText label="No: Packages" name="pcount" type="number" placeholder="1" min="1" />
                          <HoriText label="Package length (cm)" name="plength" type="number" placeholder="1" min="1" />
                          <HoriText label="Package width (cm)" name="pwidth" type="number" placeholder="1" min="1" />
                          <HoriText label="Package height (cm)" name="pheight" type="number" placeholder="1" min="1" />
                          <HoriText label="Package weight (Kg)" name="pweight" type="number" placeholder="1" min="1" />
                        </div>

                        <div className='flex flex-col justify-center items-center p-3'>
                          <div className='w-full flex justify-between items-center'>
                          <span class="px-2 py-3 flex justify-center items-center text-center text-sm font-medium cursor-pointer text-black" >Gross volume</span>
                          <span className='px-4'>124 cbm</span>
                          </div>
                          <div className='w-full flex justify-between items-center'>
                          <span class="px-2 py-3 flex justify-center items-center text-center text-sm font-medium cursor-pointer text-black" >Gross weight</span>
                          <span className='px-4'>124 Kg</span>

                        

                        </div>
                        <div className="w-[150px] mt-5 h-8 bg-orange-500 p-2 rounded-md mb-3 text-white font-bold flex justify-center items-center ml-3">
                            <button type="submit">Fill</button>

                          </div>
                        </div>
                      </div>
                  <div className="w-full flex justify-center items-center mb-5">
                      <div className="w-[150px] mt-5 h-8 bg-orange-500 p-2 text-white rounded-md font-bold flex justify-center items-center ml-3">
                        <button type="submit">Search</button>

                      </div>
                  </div>
                </>

              }
                  
                   

             

              </div>
            </Form>
          )}
        </Formik>

          
        </div>
            
      </div>

      {/* <div className='w-3/4 flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-5 my-10 gap-5'>
        <div className='flex justify-center items-center gap-5'>
          <p className='text-base font-bold'>loading port: </p>
          <p className='p-2 bg-red-600 text-white text-base flex'>{newarr.loading}</p>

        </div>
        <div className='flex justify-center items-center gap-5'>
          <p className='text-base font-bold'>destination port: </p>
          <p className='p-2 bg-red-600 text-white text-base flex'>{newarr.desty}</p>


        </div> 
        <div className='flex justify-center items-center gap-5'>
          <p className='text-base font-bold'>container type: </p>
          <p className='p-2 bg-red-600 text-white text-base flex'>{newarr.containerType}</p>


        </div>
        <div className='flex justify-center items-center gap-5'>
          <p className='text-base font-bold'>container quantity: </p>
          <p className='p-2 bg-red-600 text-white text-base flex'>{newarr.quantity}</p>


        </div>
      </div> */}

      {/* <TextForum label="Cargo name" name="name" type="text" />
                  <TextForum label="Cargo type" name="type" type="text" />
                  <TextForum label="Place of Loading" name="loading" type="text" />
                  <TextForum label="Place of Destination" name="desty" type="text" />
                  <TextForum label="Container type" name="conType" type="text" />
                  <TextForum label="No of containers" name="nocons" type="text" />
                  <TextForum label="Cargo weight" name="conweit" type="text" />
                  <TextForum label="Schedule date" name="scdate" type="text" /> */}

                  {/* <TextForum label="Origin" name="loading" type="text" placeholder="Origin city or port" />
                  <TextForum label="Destination" name="desty" type="text" placeholder="Destination city or port" /> */}
    
     

    </div>

  </>
  )
}

export default Booking