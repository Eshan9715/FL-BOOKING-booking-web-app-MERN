import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import vessel from '../assets/vessel.jpg'
import AlertPorts from '../components/AlertPorts'
import AlertLines from '../components/AlertLines'
import axios from 'axios'
import { TextField } from '@mui/material'
import { codes } from '../Data'

const Settings = () => {
    const [showPorts, setShowPorts] = useState(false)
    const [showLines, setShowLines] = useState(false)

    const [portsAdd, setPortsAdd] = useState(false)
    const [linesAdd, setLinesAdd] = useState(false)
    const [pdetails, setpDetails] = useState([])
    const [ldetails, setlDetails] = useState([])

    // const portColumns = [
    //     { id: 1,  name: "Port Name" },
    //     { id: 2,  name: "Port Code" },
    //     { id: 3,  name: "Country Name" },
    //     { id: 4,  name: "Country logo" },
    //     { id: 5,  name: "Action" },
    //   ];

    const [search, setSearch] = useState('')

    useEffect(() => {
  
        const getPorts = ()=>{
          axios
          .get(`http://localhost:5000/api/port`)
          .then((res) => {
            console.log(res.data);
            setpDetails(res.data.ports)
          })
          .catch(err=> {
            console.log(err);
          })     
        }
        getPorts();

        const getLines = ()=>{
            axios
            .get(`http://localhost:5000/api/line`)
            .then((res) => {
              console.log(res.data);
              setlDetails(res.data.lines)
            })
            .catch(err=> {
              console.log(err);
            })     
          }
          getLines();
        
    }, []);


  return (
    <>
        <Navbar/>
        <div className="min-h-screen w-screen flex overflow-auto text-black bg-gradient-to-b from-blue-500 to-gray-900">
            <div className='w-full flex'>
                <div className='w-[14%]'>
                <Sidenavbar role='admin'/>
                </div>

                <div className='w-[86%] min-h-screen p-4 flex flex-col'>
                    <div className='w-full mt-[80px] h-full flex justify-center items-start p-4 gap-5'>

                    <div className="w-3/5 flex items-center justify-center text-center gap-2 bg-white rounded-md p-4 shadow-md">
                        <div className='w-full flex flex-col'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex justify-start items-center'>
                                    <img src={vessel} alt='' className='w-10 h-8'/>
                                    <h3 className='p-2 text-lg'>Sea Ports</h3>
                                </div>

                                <div className='flex justify-end items-center gap-2'>
                                    <TextField label="Search" variant="outlined" size="small" className='border rounded-md py-1.5 mt-1 w-[200px]' value={search} onChange={(e)=>setSearch(e.target.value)}/>

                                    <button onClick={()=>setPortsAdd(!portsAdd)}
                                        className={`flex ${portsAdd? "border-2 text-black bg-white cursor-pointer border-black":"bg-red-600 text-white"} items-center justify-center w-10 h-10 p-1 text-base tracking-wide capitalize transition-colors duration-300 transform rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                                       <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                                       </svg>

                                    </button> 

                                    <button  onClick={()=>setShowPorts(!showPorts)}>
                                    {showPorts && <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 h-10 p-2 cursor-pointer text-white rounded-full bg-red-600 shadow-lg mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                                        </svg>}
                                        {!showPorts &&<svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 cursor-pointer h-10  rounded-full text-white
                                        p-2 shadow-lg bg-orange-500 mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                        </svg>}</button>
                                </div>
                            </div>

                            {showPorts && 
                            <>
                                <div className='h-0.5 bg-gray-300 w-full my-2 px-4'></div>
                                <div className='w-full flex justify-center items-center'>
                                    
                                    <div class="w-full relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                                        <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400 ">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                                                <tr className='text-center'>
                                                    <th scope="col" class="px-6 py-3">
                                                        Port Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Port Code
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Country Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Country logo
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='overflow-y-scroll h-[200px] w-full'>
                                                {
                                                    pdetails?.filter((pdetail)=> search.toLowerCase()===''? pdetail :pdetail.CountryName.toLowerCase().includes(search.toLowerCase())).map((pdetail,i)=>(
                                                        <tr className='text-center justify-center text-black' key={i}>
                                                            <td className='p-3'>{pdetail.PortName}</td>
                                                            <td className='p-3'>{pdetail.PortCode}</td>
                                                            <td className='p-3'>
                                                            {pdetail.CountryName}
                                                            </td>
                                                            <td className='p-3'>
                                                            <div className='w-full flex justify-center'>
                                                            <img
                                                                loading="lazy"
                                                                width="25"
                                                                src={`https://flagcdn.com/w20/${(codes.find(({ name }) => name.toLowerCase() === pdetail.CountryName.toLowerCase())).code.toLowerCase()}.png`}
                                                                srcSet={`https://flagcdn.com/w40/${(codes.find(({ name }) => name.toLowerCase() === pdetail.CountryName.toLowerCase())).code.toLowerCase()}.png 2x`}
                                                                alt=""
                                                            /> 
                                                            </div>
                                                           
                                                            </td>

                                                            
                                                            <td className='p-3 flex justify-center items-center gap-3'>
                                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                            </svg>
                                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                            </svg>
                                                            </td>                                                          
                                                        </tr>
                                                    ))
                                                }
                                              
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </>
                            }
                        </div>
                                                           
                    </div>
                
                    <div className="w-2/5 flex  items-center justify-center text-center gap-2 bg-white rounded-md p-4 shadow-md">
                        <div className='w-full flex flex-col'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex justify-start items-center'>
                                    <img src={vessel} alt='' className='w-10 h-8'/>
                                    <h3 className='p-2 text-lg'>Shipping lines</h3>
                                </div>

                                <div className='flex justify-end items-center gap-2'>
                                    <button onClick={()=>setLinesAdd(!linesAdd)}
                                         className={`flex ${linesAdd? "border-2 text-black bg-white cursor-pointer border-black":"bg-red-600 text-white"} items-center justify-center w-10 h-10 p-1 text-base tracking-wide capitalize transition-colors duration-300 transform rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                                       <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                                       </svg>

                                    </button> 

                                    <button  onClick={()=>setShowLines(!showLines)}>
                                    {showLines && <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 h-10 p-2 cursor-pointer text-white rounded-full bg-red-600 shadow-lg mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                                        </svg>}
                                        {!showLines &&<svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 cursor-pointer h-10  rounded-full text-white
                                        p-2 shadow-lg bg-orange-500 mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                        </svg>}</button>
                                </div>
                            </div>

                            {showLines && 
                            <>
                                <div className='h-0.5 bg-gray-300 w-full my-2 px-4'></div>
                                <div className='w-full flex justify-center items-center'>
                                    
                                    <div class="w-full relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-[300px] overflow-y-scroll">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                                                <tr className='text-center'>
                                                    <th scope="col" class="px-6 py-3">
                                                        Shipping logo
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        shipping line
                                                    </th>                                        
                                                    <th scope="col" class="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ldetails?.map((ldetail,i)=>(
                                                        <tr className='text-center text-black' key={i}>
                                                            <td className='p-2.5 flex justify-center'>
                                                            <img src={ldetail.LineLogo} alt='' className='w-8 h-8 rounded-xl' />
                                                            </td>
                                                            <td className='p-2.5'>{ldetail.LineName}</td>
                                                            <td className='p-2.5 flex justify-center items-center gap-3'>
                                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                            </svg>
                                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                            </svg>
                                                            </td>                                                          
                                                        </tr>
                                                    ))
                                                }
                                              
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </>
                            }
                        </div>
                    
                    

                    

                        
                    
                    </div>

                


                    {/* <div className="w-4/5 flex items-center justify-between text-center gap-2 bg-white rounded-md p-4 shadow-md mt-4">
                        <div className='flex justify-start items-center'>
                            <img src={vessel} alt='' className='w-10 h-8'/>
                            <h3 className='p-2 text-lg'>Shipping lines</h3>
                        </div>

                        <div className='flex justify-end items-center gap-2'>
                            <button onClick={()=>setShow(!show)}
                                className={`flex ${show? "border-2 text-black bg-white rounded-md border-black":"bg-red-600 text-white"} items-center justify-center max-w-[250px] px-4 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                                <span>Add new</span>

                            </button> 
                            {show && <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 cursor-pointer h-10 p-2 text-white rounded-full bg-red-600 shadow-lg mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                                </svg>}
                                {!show &&<svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 h-10 cursor-pointer rounded-full text-white
                                p-2 shadow-lg bg-orange-500 mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                </svg>}
                        </div>

                        
                    
                    </div> */}



                    </div>

                                 
                </div>
            </div>

            <AlertPorts show={portsAdd} title='Add new port' close={()=>setPortsAdd(false)} />
            <AlertLines show={linesAdd} title='Add new line' close={()=>setLinesAdd(false)} />

        </div>
    </>
  )
}

export default Settings