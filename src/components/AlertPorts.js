import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { codes } from '../Data'
import AutoCountry from './AutoCountry'
import Success from './Success'
import { TextInput } from './TextInput'

const AlertPorts = ({show,title,close}) => {
    const navigate = useNavigate();

    const [pName, setpName] = useState('')
    const [pCode, setpCode] = useState('')

    const [pCountry, setCountry] = useState('china')
    const [error, setError] = useState('')
    const [pdetails, setpDetails] = useState([])
    const [id, setId] = useState('');

    useEffect(() => {
        setId(localStorage.getItem("userID"))
    
    }, []);
    const send = ()=>{
        if(pName==='' || pCode==='' || pCountry===''){
            setError('Please fill the required details !!')
        }else{
            sendRequest();
            close();
            <Success title='New port' action='added' type='low' handleClick={()=>navigate("/settings")} />
        }
    }

    const sendRequest = async() =>{
        const addPort = { 
          PortName: pName, 
          PortCode: pCode.toUpperCase(),
          CountryName: pCountry,
          user: id

        }        
        axios
        .post("http://localhost:5000/api/port/add",addPort)
        .then((res) => {
          console.log(res.data);
    
        setpDetails(res.data)
      });
    }

    console.log(pdetails.port)
    

    if(!show){
        return null
    }

    console.log(pCountry)


  return (
    <div className={`${show? "fixed inset-0" : "hidden"}  bg-gray-900 bg-opacity-50 w-full flex justify-center items-center md:ml-20`}>
            <div className={`flex flex-col bg-white w-1/3 gap-4 rounded-lg shadow-lg`}>
            <h3 className='text-lg font-semibold text-center p-4 bg-sky-700 text-white'>{title}</h3>
            <div className='w-full flex flex-col justify-center items-center'>

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        {/* <TextInput label='Country name' placeholder='' setValue={setCountry} /> */}
                        <AutoCountry options={codes} title="Country name"  setPortData={setCountry}/>
                    </div>                
                </div>
                <div className='w-full flex justify-center items-center p-1 my-2'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <TextInput label='Port name' placeholder='' setValue={setpName} />
                    </div>
                </div>

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <TextInput label='Port code' placeholder='' setValue={setpCode} />
                    </div>           
                </div>

                

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[75%] flex flex-col justify-center items-end px-10 font-semibold'>
                        {/* <TextField
                            disabled
                            id="outlined-disabled"
                            label="Country code"
                            // defaultValue={codes.find((e)=> e.name.toLowerCase()==='china')}
                            defaultValue={(codes.find(({ name }) => name.toLowerCase() === pCountry.toLowerCase())).code}
                            className='w-full'
                        /> */}
                        {/* <TextInput label='Country code' placeholder='' setValue={setcCode} isdisa /> */}
                        {/* <TextField 
                            type='text' 
                            value= {(codes.find((e)=> e.name.toLowerCase()===(pCountry===""?"china": pCountry.length<=3? "samoa" : pCountry.toLowerCase()))).code}
                            variant='outlined'
                            className='w-full'
                            inputProps={
                                { readOnly: true, }
                            }
                        /> */}

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

export default AlertPorts