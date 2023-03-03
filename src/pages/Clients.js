import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import cus from '../assets/cus.png'
import axios from 'axios'

const Clients = () => {
    const [cdetails, setcDetails] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
  
        const getClients = ()=>{
          axios
          .get(`http://localhost:5000/api/user`)
          .then((res) => {
            console.log(res.data);
            setcDetails(res.data)
          })
          .catch(err=> {
            console.log(err);
          })     
        }
        getClients();
        
    }, []);

    console.log(cdetails)

    const ClientsColumns = [
        { id: 1,  name: "Profile" }, { id: 2, name: "Name" }, { id: 3,  name: "Company" }, 
        { id: 4,  name: "Email" }, { id: 5, name: "Mobile No" }, { id: 6,  name: "Bookings" },
        { id: 7,  name: "FCL Count" }, { id: 8, name: "LCL Count" }, { id: 9,  name: "Assinged to" },
        { id: 10,  name: "Action" }
      ];

    const editStatus = ()=>{
        

      }


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
                    <div className="flex items-center justify-center text-center gap-2">
                        <img src={cus} alt='' className='w-[90px]' />
                        <p className="text-xl sm:text-3xl text-white font-bold leading-none">Clients</p>
                    </div>

                <table class="text-center w-full rounded-md">
                    <thead class="bg-gray-600 flex text-white w-full">

                        <tr className='text-center flex w-full mb-4'>
                            {ClientsColumns.map(({ id, name }) => (
                            <th className='p-4 w-[10%]' key={id}>{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='bg-white flex flex-col items-center justify-between overflow-y-scroll w-full max-h-[260px]'>
                        {
                            cdetails?.filter((cdetail)=> search.toLowerCase()===''? cdetail :cdetail.CountryName.toLowerCase().includes(search.toLowerCase())).map((cdetail,i)=>(
                                <tr className='text-center items-center flex w-full mb-4 hover:bg-orange-500 hover:text-white' key={i}>
                                    <td className='p-3 w-[10%]'>
                                        <div className='w-full flex justify-center'>
                                    <img
                                        className='w-12 h-12 rounded-full'
                                        src={cdetail.image}
                                        alt=""
                                    /> 
                                    </div>
                                    </td>
                                    <td className='p-3 w-[10%]'>{cdetail.name}</td>
                                    <td className='p-3 w-[10%]'>
                                    {cdetail.companyName}
                                    </td>
                                    <td className='p-3 w-[12%]'>{cdetail.email}</td>
                                    <td className='p-3 w-[10%]'>{cdetail.mobileNumber}</td>
                                    
                                    <td className='p-3 w-[8%]'>{cdetail.bookings.length}</td>
                                    <td className='p-3 w-[10%]'>{cdetail.fclqueries.length}</td>
                                    <td className='p-3 w-[10%]'>
                                    {cdetail.lclqueries.length}
                                    </td>
                                    <td className='p-3 w-[10%]'>
                                    {cdetail.assignedTo}
                                    </td>

                                    
                                    <td className='p-3 w-[10%] gap-3'>
                                    <div className='w-full flex justify-center items-center gap-3'>
                                        <svg fill="none" onClick={editStatus} stroke="currentColor" stroke-width="1.5" className='w-7 h-7 cursor-pointer p-1.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                        
                    </tbody>
                </table>

                </div>
            </div>
            </div>
            </div>
            </>
                
                
                
                  )
}

export default Clients