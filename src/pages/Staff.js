import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import axios from 'axios'
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const Staff = () => {
    const [sdetails, setsDetails] = useState([])
    const [search, setSearch] = useState('')
    const [catomode, setCatomode] = useState('')
    const [tabmode, setTabmode] = useState('Salesman')

    const [spdetails, setspDetails] = useState([])
    const [crddetails, setcrdDetails] = useState([])
    const [othdetails, setothDetails] = useState([])

    const [aNsort, setaNSort] = useState("ASC")
    const [aCNsort, setaCNSort] = useState("ASC")

    const [aCsort, setaCSort] = useState("ASC")
    const [aBsort, setaBSort] = useState("ASC")

    // const nameSort = (mode, user)=>{
    //     if(mode==="ASC"){

    //     }
    // }

    // const clientSort = ()=>{
        
    // }

    // const bookingSort = ()=>{
        
    // }


    useEffect(() => {
  
        const getStaff = ()=>{
          axios
          .get(`http://localhost:5000/api/member`)
          .then((res) => {
            // console.log(res.data);
            setsDetails(res.data)
            setcrdDetails(sdetails.filter((e)=>e.role==="crd"))
            setspDetails(sdetails.filter((e)=>e.role==="salesman"))
            setothDetails(sdetails.filter((e)=>(e.role!=="salesman" && e.role!=="crd" )))

          })
          .catch(err=> {
            console.log(err);
          })     
        }
        getStaff();
        
    }, [sdetails]);

    // console.log(sdetails)

    const SpColumns = [
        { id: 1,  name: "Profile" },
        { id: 2, name: "Name", icon: aNsort==="ASC" ?<svg fill="none" onClick={()=>setaNSort('DSC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg> : <svg fill="none" onClick={()=>setaNSort('ASC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>},
        { id: 3,  name: "Role" }, 
        { id: 4,  name: "Email" }, { id: 5, name: "Mobile No" },
        { id: 6,  name: "Clients", icon: aCsort==="ASC" ?<svg fill="none" onClick={()=>setaCSort('DSC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg> : <svg fill="none" onClick={()=>setaCSort('ASC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg> },
        { id: 7,  name: "Bookings" ,icon: aBsort==="ASC" ?<svg fill="none" onClick={()=>setaBSort('DSC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg> : <svg fill="none" onClick={()=>setaBSort('ASC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>},
        { id: 8,  name: "Action" }
      ];

      const crdColumns = [
        { id: 1,  name: "Profile" },
        { id: 2, name: "Name",icon: aCNsort==="ASC" ?<svg fill="none" onClick={()=>setaCNSort('DSC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg> : <svg fill="none" onClick={()=>setaCNSort('ASC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg> }, 
        { id: 3,  name: "Role" }, 
        { id: 4,  name: "Email" }, { id: 5, name: "Mobile No" }, 
        { id: 6,  name: "Clients",icon: aCsort==="ASC" ?<svg fill="none" onClick={()=>setaCSort('DSC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg> : <svg fill="none" onClick={()=>setaCSort('ASC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>  },

        { id: 7,  name: "Bookings",icon: aBsort==="ASC" ?<svg fill="none" onClick={()=>setaBSort('DSC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
        </svg> : <svg fill="none" onClick={()=>setaBSort('ASC')} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg> },

        { id: 8 , name: "Assigned" }, { id: 9,  name: "Action" }
      ];

      const othColumns = [
        { id: 1,  name: "Profile" }, { id: 2, name: "Name" }, { id: 3,  name: "Role" }, 
        { id: 4,  name: "Email" }, { id: 5, name: "Mobile No" },{ id: 6,  name: "Action" }
      ];

  return (
    <>
        <Navbar/>
        <div className="min-h-screen w-screen flex overflow-auto text-black bg-gradient-to-b from-blue-500 to-gray-900">
            <div className='w-full flex'>
                <div className='w-[14%]'>
                    <Sidenavbar role='admin'/>
                </div>

                <div className='w-[86%] min-h-screen p-4 flex flex-col'>
                    <div className='w-full mt-[80px] flex justify-center items-start p-2 gap-2 flex-col'>
    
                    <div className='w-full flex justify-between items-center'>
                        <div className="my-2 flex">
                            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                               
                                <li className="mr-2 py-1.5" role="presentation">
                                    <button onClick={()=>setTabmode("Salesman")} className={`inline-block ${tabmode==="Salesman"? "bg-orange-500": 'bg-gray-500'} px-4 py-3 text-white rounded-lg active`}id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Sales Persons</button>
                                </li>
                                <li className="mr-2 py-1.5" role="presentation">
                                    <button onClick={()=>setTabmode("CRD")} className={`inline-block ${tabmode==="CRD"? "bg-orange-500": 'bg-gray-500'} px-4 py-3 text-white rounded-lg active`}id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">CRDs</button>
                                </li>
                                <li className="mr-2 py-1.5" role="presentation">
                                    <button onClick={()=>setTabmode("Others")} className={`inline-block ${tabmode==="Others"? "bg-orange-500": 'bg-gray-500'} px-4 py-3 text-white rounded-lg active`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Others</button>
                                </li>
                                
                            </ul>

                        </div>

                        
                        <div className="flex items-center justify-center text-center gap-2 bg-white rounded-md px-3 shadow-md">
                                    <FormControl sx={{ m: 1, minWidth: 200,borderRadius:2 }} size="small">
                                    <InputLabel id="demo-select-small">Catogery</InputLabel>
                                    <Select
                                        value={catomode}
                                        label="Catogery"
                                        onChange={(e)=>setCatomode(e.target.value)}
                                        size='small'              
                                    >
                                    
                                        <MenuItem value={"Name"}>Name</MenuItem>
                                        <MenuItem value={"Email"}>Email</MenuItem>
                                        {tabmode==="CRD" && <MenuItem value={"Assigned To"}>Assigned To</MenuItem>}

                                    </Select>
                                    </FormControl>

                                    {catomode!=='' && <svg fill="none" onClick={()=>setCatomode("")} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 cursor-pointer text-gray-400' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>}
                                
                                    <TextField label="Search" variant="outlined" size="small"  
                                        InputProps={{
                                        endAdornment: <InputAdornment position="start">
                                            {search!=='' && <svg fill="none" onClick={()=>setSearch("")} stroke="currentColor" stroke-width="1.5" className='w-5 h-5 cursor-pointer text-gray-400' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>}
                                        </InputAdornment>,
                                        }}
                                        className='border rounded-md py-1.5 mt-1 w-[200px]' value={search} onChange={(e)=>setSearch(e.target.value)}/>

                            </div>

                        {/* <div className="flex items-center justify-center text-center gap-2 bg-white rounded-md px-3 shadow-md">
                                    <FormControl sx={{ m: 1, minWidth: 220,borderRadius:2 }} size="small">
                                    <InputLabel id="demo-select-small">Sort by</InputLabel>
                                    <Select
                                        value={catomode}
                                        label="Sort by"
                                        onChange={(e)=>setCatomode(e.target.value)}
                                        size='small'
                                    >
                                        <MenuItem value={"Name to A-Z"}>Name to A-Z</MenuItem>
                                        <MenuItem value={"Name to Z-A"}>Name to Z-A</MenuItem>
                                        <MenuItem value={"Bookings low - high"}>Bookings low - high</MenuItem>
                                        <MenuItem value={"Bookings high - low"}>Bookings high - low</MenuItem>
                                        <MenuItem value={"Clients low - high"}>Clients low - high</MenuItem>
                                        <MenuItem value={"Clients high - low"}>Clients high - low</MenuItem>


                                    </Select>
                                    </FormControl>
                                

                        </div> */}

                    </div>

                    { tabmode==='Salesman'?

                        <table className="text-center w-full mt-2">
                            <thead className="bg-gray-600 flex text-white w-full">
                                <tr className='text-center flex w-full mb-4'>
                                        {SpColumns.map(({ id, name, icon }) => (
                                        <th className='p-4 w-[12.5%] flex justify-center items-center' key={id}>{name} {icon}</th>
                                        ))}
                                </tr>
                            </thead>

                            <tbody className='bg-white flex flex-col items-center justify-between overflow-y-scroll w-full max-h-[340px]'>
                                <>
                                {catomode==="Name"?
                                    <>
                                    {
                                        spdetails?.filter((sdetail)=> search.toLowerCase()===''? sdetail :sdetail.name.toLowerCase().includes(search.toLowerCase())).map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-2 mt-2 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[12.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[12.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[12.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[12.5%]'>0</td>
                                                <td className='p-3 w-[12.5%]'>0</td>

                                                
                                                <td className='p-3 w-[12.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                    
                                    </>
                                
                                : catomode==="Email"?
                                <>
                                    {
                                        spdetails?.filter((sdetail)=> search.toLowerCase()===''? sdetail :sdetail.email.toLowerCase().includes(search.toLowerCase())).map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[12.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[12.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[12.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[12.5%]'>0</td>
                                                <td className='p-3 w-[12.5%]'>0</td>
                                           
                                                
                                                <td className='p-3 w-[12.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                 :

                                 aNsort==="DSC"?
                                <>
                                    {
                                        spdetails?.filter((sdetail)=> sdetail.name).sort().reverse().map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[12.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[12.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[12.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[12.5%]'>0</td>
                                                <td className='p-3 w-[12.5%]'>0</td>
                                           
                                                
                                                <td className='p-3 w-[12.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                 :

                                 aCsort==="DSC"?
                                <>
                                    {
                                        spdetails?.filter((sdetail)=> sdetail.Clients).sort().reverse().map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[12.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[12.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[12.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[12.5%]'>0</td>
                                                <td className='p-3 w-[12.5%]'>0</td>
                                           
                                                
                                                <td className='p-3 w-[12.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                 :

                                 aBsort==="DSC"?
                                <>
                                    {
                                        spdetails?.filter((sdetail)=> sdetail.bookings).sort().reverse().map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[12.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[12.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[12.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[12.5%]'>0</td>
                                                <td className='p-3 w-[12.5%]'>0</td>
                                           
                                                
                                                <td className='p-3 w-[12.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                 :

                                <>
                                    {
                                        spdetails?.map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[12.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[12.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[12.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[12.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[12.5%]'>0</td>
                                                <td className='p-3 w-[12.5%]'>0</td>
   
                                                <td className='p-3 w-[12.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                    
                                </>
                                
                                }
                            </>
                                    
                            </tbody> 
                                    
                        </table>
                         :

                    tabmode==='CRD'? 
                                              
                        <table className="text-center w-full mt-2">
                            <thead className="bg-gray-600 flex text-white w-full">
                                <tr className='text-center flex w-full mb-4'>
                                        {crdColumns.map(({ id, name, icon }) => (
                                        <th className='p-4 w-[11.5%] flex justify-center' key={id}>{name} {icon}</th>
                                        ))}
                                </tr>
                            </thead>

                            <tbody className='bg-white flex flex-col items-center justify-between overflow-y-scroll w-full max-h-[340px]'>
                                <>
                                {catomode==="Name"?
                                    <>
                                    {
                                        crddetails?.filter((sdetail)=> search.toLowerCase()===''? sdetail :sdetail.name.toLowerCase().includes(search.toLowerCase())).map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-2 mt-2 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[11.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[11.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.assignedTo}
                                                </td> 

                                                
                                                <td className='p-3 w-[11.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 111.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                    
                                    </>
                                
                                : catomode==="Email"?
                                <>
                                    {
                                        crddetails?.filter((sdetail)=> search.toLowerCase()===''? sdetail :sdetail.email.toLowerCase().includes(search.toLowerCase())).map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[11.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[11.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>0</td>

                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.assignedTo}
                                                </td> 

                                                
                                                <td className='p-3 w-[11.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                
                                : catomode==='Assigned To'?

                                <>
                                    {
                                        crddetails?.filter((sdetail)=> search.toLowerCase()===''? sdetail :sdetail.assignedTo.toLowerCase().includes(search.toLowerCase())).map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[11.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[11.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>0</td>

                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.assignedTo}
                                                </td> 

                                                
                                                <td className='p-3 w-[11.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </> :

                                aCNsort==="DSC"?
                                <>
                                    {
                                        crddetails?.filter((sdetail)=> sdetail.name).sort().reverse().map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[11.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[11.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.assignedTo}</td>

                                                <td className='p-3 w-[11.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                 :

                                 aCsort==="DSC"?
                                <>
                                    {
                                        crddetails?.filter((sdetail)=> sdetail.Clients).sort().reverse().map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[11.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[11.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>0</td>
                                           
                                                
                                                <td className='p-3 w-[11.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                 :

                                 aBsort==="DSC"?
                                <>
                                    {
                                        crddetails?.filter((sdetail)=> sdetail.bookings).sort().reverse().map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[11.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[11.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>0</td>
                                           
                                                
                                                <td className='p-3 w-[11.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>
                                 :

                                <>
                                    {
                                        crddetails?.map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[11.5%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[11.5%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[11.5%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[11.5%]'>0</td>
                                                <td className='p-3 w-[11.5%]'>0</td>

                                                <td className='p-3 w-[11.5%]'>
                                                {sdetail.assignedTo}
                                                </td> 

                                                
                                                <td className='p-3 w-[11.5%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                    
                                </>
                                
                                }
                            </>
                                    
                            </tbody> 
                                    
                        </table> 
                        
                        :

                        <table className="text-center w-full mt-2">
                            <thead className="bg-gray-600 flex text-white w-full">
                                <tr className='text-center flex w-full mb-4'>
                                        {othColumns.map(({ id, name }) => (
                                        <th className='p-4 w-[16%]' key={id}>{name}</th>
                                        ))}
                                </tr>
                            </thead>

                            <tbody className='bg-white flex flex-col items-center justify-between overflow-y-scroll w-full max-h-[340px]'>
                                <>
                                {catomode==="Name"?
                                    <>
                                    {
                                        othdetails?.filter((sdetail)=> search.toLowerCase()===''? sdetail :sdetail.name.toLowerCase().includes(search.toLowerCase())).map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-2 mt-2 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[16%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[16%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[16%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[16%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[16%]'>{sdetail.mobileNumber}</td>                                           
                                               
                                                <td className='p-3 w-[16%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                    
                                    </>
                                
                                : catomode==="Email"?
                                <>
                                    {
                                        othdetails?.filter((sdetail)=> search.toLowerCase()===''? sdetail :sdetail.email.toLowerCase().includes(search.toLowerCase())).map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[16%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[16%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[16%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[16%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[16%]'>{sdetail.mobileNumber}</td>
                                                
                                                <td className='p-3 w-[16%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                </>                               
                                : 
                                <>
                                    {
                                        othdetails?.map((sdetail,i)=>(
                                            <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                                <td className='p-3 w-[16%]'>
                                                    <div className='w-full flex justify-center'>
                                                <img
                                                    className='w-12 h-12 rounded-full'
                                                    src={sdetail.image}
                                                    alt=""
                                                /> 
                                                </div>
                                                </td>
                                                <td className='p-3 w-[16%]'>{sdetail.name}</td>
                                                <td className='p-3 w-[16%]'>
                                                {sdetail.role}
                                                </td>
                                                <td className='p-3 text-[13px] w-[16%]'>{sdetail.email}</td>
                                                <td className='p-3 w-[16%]'>{sdetail.mobileNumber}</td>
 
                                                <td className='p-3 w-[16%] gap-3'>
                                                <div className='w-full flex justify-center items-center gap-3'>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 p-1.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                    </svg>
                                                </div>
                                            
                                                </td>                                                          
                                            </tr>
                                        ))
                                    }
                                    
                                </>
                                
                                }
                            </>
                                    
                            </tbody> 
                                    
                        </table> }
                    </div>
                </div>
            </div>
        </div>
    </>
                              
    )
}

export default Staff