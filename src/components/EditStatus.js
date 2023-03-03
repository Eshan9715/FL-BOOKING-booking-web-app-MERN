import { Box, FormControl, InputLabel, MenuItem, TextField } from '@mui/material'
import axios from 'axios'
import { Select } from 'formik-mui'
import React, { useEffect, useState } from 'react'
import { codes, salesPersons } from '../Data'
import AutoCountry from './AutoCountry'
import AutoSalesP from './AutoSalesP'
import Success from './Success'
import { TextInput } from './TextInput'

const EditStatus = ({show,title,close}) => {

    const [status, setStatus] = useState('')
    const [salesP, setSalesP] = useState('')

    const [error, setError] = useState('')
    const [id, setId] = useState('');

    useEffect(() => {
        setId(localStorage.getItem("userID"))
    
    }, []);
    const send = ()=>{
        if(status==='' || salesP===''){
            setError('Please fill the required details !!')
        }else{
            // sendRequest();
            close();
            // <Success title='New port' action='added' type='low' handleClick={()=>navigate("/settings")} />
        }
    }

    // const sendRequest = async() =>{
    //     const editStatus = { 
    //       PortName: pName, 
    //       PortCode: pCode.toUpperCase(),
    //       CountryName: pCountry,
    //       user: id

    //     }        
    //     axios
    //     .post("http://localhost:5000/api/port/add",editStatus)
    //     .then((res) => {
    //       console.log(res.data);
    
    //     setpDetails(res.data)
    //   });
    // }

    

    if(!show){
        return null
    }



  return (
    <div className={`${show? "fixed inset-0" : "hidden"}  bg-gray-900 bg-opacity-50 w-full flex justify-center items-center md:ml-20`}>
            <div className={`flex flex-col bg-white w-1/3 gap-4 rounded-lg shadow-lg`}>
            <h3 className='text-lg font-semibold text-center p-4 bg-sky-700 text-white'>{title}</h3>
            <div className='w-full flex flex-col justify-center items-center'>

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        {/* <TextInput label='Country name' placeholder='' setValue={setCountry} /> */}
                        <Box sx={{ width: '100%'}}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Delivery Mode</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Delivery Mode"
                                  value={status}
                                  onChange={(e)=>setStatus(e.target.value)}
                                
                              >
                              <MenuItem value={"public"}>public</MenuItem>
                              <MenuItem value={"pending"}>pending</MenuItem>

                                </Select>
                              </FormControl>
                            </Box>                     
                    </div>                
                </div>
                <div className='w-full flex justify-center items-center p-1 my-2'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <AutoSalesP options={salesPersons} title="Country name"  setPortData={setSalesP}/>
                    </div>
                </div>

            </div>

            {error!=='' && <p className='text-xs text-center text-red-600 mb-1'>{error}</p> }
     
            <div className='flex w-full justify-center gap-5 items-center mb-5'>
                <button onClick={close} 
                className="flex text-base items-center mt-3 justify-center w-[120px]  px-8 py-2 font-semibold text-white capitalize bg-red-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>cancel</span>
                </button> 
                <button onClick={send} 
                className="flex text-base items-center mt-3 justify-center w-[120px]  px-8 py-2 font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>ok</span>
                </button> 
            </div>

            </div>
        {/* </div> */}

    </div>

    
    )
}

export default EditStatus