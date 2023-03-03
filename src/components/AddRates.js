import axios from 'axios'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userSchema8 } from './userValidation'

var rates=[];
const AddRates = ({show,title,close}) => {
    const navigate = useNavigate();

    const [line, setLine] = useState('')
    const [rate, setRate] = useState('')

    const [error, setError] = useState('')
    const [id, setId] = useState('');
    const [tab, setTab] = useState(false);


    useEffect(() => {
        setId(localStorage.getItem("userID"))
    
    }, []);
    const send = ()=>{
        if(line==='' || rate===''){
            setError('Please fill the required details !!')
        }else{
            // sendRequest();
            close();
            // <Success title='New port' action='added' type='low' handleClick={()=>navigate("/settings")} />
        }
    }

    // const sendRequest = async() =>{
    //     const addPort = { 
    //       PortName: pName, 
    //       PortCode: pCode.toUpperCase(),
    //       user: id

    //     }        
    //     axios
    //     .post("http://localhost:5000/api/port/add",addPort)
    //     .then((res) => {
    //       console.log(res.data);
    
    //     setpDetails(res.data)
    //   });
    // }

    // console.log(pdetails.port)
// let vDate =  new Date();
var today = new Date();
// today.setDate(vDate.getDate() + 3)

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy+'-'+dd+'-'+mm;

    // const today = new Date()
    // vDate.setDate(today.getDate() + 3)

    const initialValues = {
        SRates: [
            {  
              sLine: '',
              containerType: '',
              rate: '',
              date: ''
            },
          ],
    }
    

    if(!show){
        return null
    }

    // console.log(pCountry)


  return (
    <div className={`${show? "fixed inset-0" : "hidden"}  bg-gray-900 bg-opacity-50 w-full flex justify-center items-center md:ml-20`}>
            <div className={`w-[55%] flex flex-col bg-white gap-4 rounded-lg shadow-lg`}>
            <h3 className='text-lg font-semibold text-center p-3 bg-sky-700 text-white'>{title}</h3>


            <div className='w-full flex flex-col justify-center items-center'>

            <>
                <Formik
                    initialValues={initialValues}
                    validationSchema={userSchema8}
                    onSubmit={async (values) => {
                    console.log(values);
                    rates = [...values.SRates]
                    rates.forEach(value => {
                        value.date = moment(value.date).format('MMM Do YYYY');
                    })
                    // values = {...values , values.date:moment(values.date).format('MMM Do YYYY') }
                    console.log(rates);
                    // setCheckCargo("added");
                    setTab(!tab);
                    // obj = {...initialValues, ...values}
                    // console.log(obj)
                    // newobj = {...obj, loading: origin, desty: destination}
                    // console.log("newObj" + newobj)
                    // fclCargo = [...newobj.SRates]        
                    // console.log(fclCargo)

                    }}
                >
        
                {({ values }) => (
                    <Form>
                    <FieldArray name="SRates">
                        {({remove, push,setFieldValue}) => (
                        <div className='divide-y divide-solid divide-gray-300 overflow-y-auto mb-2 max-w-[100%] max-h-[200px]  overflow-x-auto'>
                            {values.SRates?.length > 0 &&
                            values.SRates?.map((container, index) => (
                                <div className='flex w-full justify-center items-center gap-1 p-1' key={index}>

                                    <div className='p-1 text-sm flex flex-col gap-2'>
                                            <label htmlFor={`SRates.${index}.sLine`}>Shipping line</label>
                                            <Field as="select" 
                                                name={`SRates.${index}.sLine`}
                                                className='text-center p-2 w-[180px] rounded-md border'>
                                                <option value="ONE">ONE</option>
                                                <option value="MAERSK">MAERSK</option>
                                                <option value="MSC">MSC</option>
                                                <option value="OOCL">OOCL</option>
                                                <option value="EVERGREEN">EVERGREEN</option>
                                                <option value="PIL">PIL</option>

                                            </Field>
                                     
                                    
                                        <ErrorMessage name={`SRates.${index}.sLine`} component="div" className='text-[12px] text-red-600 mb-1'/>                                                  
                                    </div>
                                
                                    <div className='p-1 text-sm flex flex-col gap-2 mr-2'>
                                            <label htmlFor={`SRates.${index}.containerType`}>Container type</label>
                                            <Field as="select" 
                                                name={`SRates.${index}.containerType`}
                                                className='text-center p-2 w-[150px] rounded-md border'>
                                                <option value="20 GP">20 GP</option>
                                                <option value="40 GP">40 GP</option>
                                                <option value="40 HC">40 HC</option>
                                                <option value="45 HC">45 HC</option>
                                                <option value="20 RG">20 RG</option>
                                                <option value="40 RG">40 RG</option>

                                            </Field>
                                     
                                    
                                        <ErrorMessage name={`SRates.${index}.containerType`} component="div" className='text-[12px] text-red-600 mb-1'/>                                                  
                                    </div>
                                
                                    <div className='text-sm flex  justify-center items-center ml-1'>

                                        <div className='flex flex-col gap-2'>
                                        <label htmlFor={`SRates.${index}.rate`}>rate</label>
                                            <Field
                                            name={`SRates.${index}.rate`}
                                            placeholder=""
                                            type="number"
                                            className='text-center p-2 w-[150px] rounded-md border'
                                            />
                                            <ErrorMessage name={`SRates.${index}.rate`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                        </div>

                                        <div className='flex flex-col gap-2 ml-2'>
                                        <label htmlFor={`SRates.${index}.date`}>date</label>
                                            <Field
                                            name={`SRates.${index}.date`}
                                            placeholder=""
                                            type="date"
                                            format='MMM Do YYYY'
                                            min={today}
                                            className='text-center p-2 w-[150px] rounded-md border'
                                            />
                                            <ErrorMessage name={`SRates.${index}.date`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                        </div>

                                        {/* <div className='flex flex-col gap-2'>
                                            <p className='ml-1'>Valid date</p>
                                            <MyDatePicker name={`SRates.${index}.date`} />
                                            <ErrorMessage name={`SRates.${index}.date`} component="div" className='text-[10px] text-red-600 mb-1'/>

                                        </div> */}
                                        


                                        <button onClick={() => remove(index)} disabled={values.SRates.length===1}>
                                                    <svg fill="none" stroke="currentColor" className='w-7 h-7 mb-3 bg-red-600 p-1 text-white cursor-pointer font-extrabold rounded-full ml-5 mt-5' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                </button>

                                                <button onClick={() => push({ sLine: '', containerType: '',  rate: '', date: ''})} >
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
                    <div className="w-[100px] mt-5 h-8 bg-white border-2 hover:bg-orange-500 hover:text-white p-2 rounded-md mb-3 font-bold flex justify-center items-center ml-3">
                    <button type="submit">Add</button>

                    </div>
                    </div>
                    </Form>
                )}
                </Formik>
            </>     

                {/* <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <VesselInputs options={shippingLines} title="Shipping line"  setVesselData={setLine}/>  
                    </div>                
                </div>
                <div className='w-full flex justify-center items-center p-1 my-2'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <TextInput label='Add rate containerwise' placeholder='20 GP $1000, 40 GP $1500...' setValue={setRate} />
                    </div>
                </div>
              */}


            </div>

            {error!=='' && <p className='text-xs text-center text-red-600 mb-1'>{error}</p> }
     
            <div className='flex w-full justify-center gap-5 items-center mb-5'>
                <button onClick={close} 
                className="flex text-base items-center mt-3 justify-center w-[120px]  px-8 py-2 font-semibold text-white capitalize bg-red-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>cancel</span>
                </button> 
                <button onClick={send} 
                className="flex text-base items-center mt-3 justify-center w-[120px]  px-8 py-2 font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>continue</span>
                </button> 
            </div>

            </div>
        {/* </div> */}

    </div>

    
    )
}

export default AddRates