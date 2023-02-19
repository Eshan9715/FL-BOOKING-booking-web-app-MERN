import React, { useState } from 'react'
// import ProgressBar from './ProgressBar'
import vessell from '../assets/vessel.jpg'
import scroute from '../assets/scroute.png' 

const RateTile = ({vdate,origin,destination,discharge,zipcode,shipline,rates,deliveryMode,remarks}) => {
  const[show, setShow] = useState(false)

  const arr = remarks.split(".");
  var len = remarks.split(".").length;
  arr.splice(len-1,1)
  
  console.log(arr)

  return (
    <div className="w-[95%] flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-2xl mt-3 mb-2">
         <div className='w-full flex justify-center items-center'>
            <div className='w-[45%] flex justify-start items-center h-full p-2'>
              <div className='w-full flex justify-start flex-row gap-2'>
                <img src={scroute} alt='' className='w-10 h-full'/>

                <div className='flex justify-center items-start flex-col gap-4'>

                  <div className='flex text-[16px] justify-start items-center gap-2 font-semibold'>
                    <h3>{origin}</h3>             
                  </div>

                  <div className='flex justify-center items-start flex-col'>
                    <div className='flex justify-center items-start  gap-2'>
                      <img src={vessell} alt='' className='w-8 h-6' />
                      <p className='text-sm'>{shipline}</p>
                    </div>   
                    <div className='flex justify-center items-start  gap-4'>
                    {destination!=="" &&<svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-5 h-5 ml-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
                    </svg>}                      
                    <p>{destination}</p>
                    <h3>{zipcode}</h3>

                    </div>                 

                  </div>

                  <div className='flex text-[16px] justify-center items-start  gap-2 font-semibold'>
                    <h3>{discharge}</h3>
                  </div>

                </div>
              </div>
            </div>

            <div className='w-[45%] flex justify-center items-center h-full'>
              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col gap-2 px-4'>
                    <div className='flex justify-start items-start gap-2'>
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mt-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg>
                      <div className='flex flex-col'>
                      <h3 className='text-sm text-gray-500'>Valid until:</h3>
                      <p>{vdate}</p>
                      </div>

                    </div>
                    <div className='flex justify-start items-center gap-2'>
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mt-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
                    </svg>
                    <h3>{deliveryMode}</h3>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center'>

                  <button onClick={()=>setShow(!show)}
                    className={`flex ${show? "border-2 text-black bg-white rounded-md border-black":"bg-red-600 text-white"} items-center justify-center w-full px-6 py-3 text-base tracking-wide capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                    <span>Rates & Remarks</span>

                    {show && <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                    </svg>}
                    {!show &&<svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-5 h-5 mt-1 ml-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>}
                  </button> 

                </div>
              </div>
            
            </div>

            <div className='w-[10%]'>
              <div className='flex flex-col justify-center items-center gap-2'>
           
                <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 h-10 cursor-pointer p-2.5 bg-blue-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-10 h-10 p-2.5 cursor-pointer bg-red-500 rounded-md text-white font-bold' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                </svg>

              </div>

            </div>


         </div>


         {show && 
         <>
          <div className='h-0.5 bg-gray-300 w-full my-2 px-4'></div>
          <div className='w-full flex justify-center items-center p-2'>
              <div className='w-1/2 flex justify-center items-start flex-col px-4 '>
              <p className=' font-semibold my-2'>Rates:</p>
              {rates.map((rat,index)=>(
                  <div className='w-full flex justify-start items-center gap-x-20 gap-y-5' key={index}>
                    <div className='flex justify-start items-center gap-3'>
                      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"></path>
                      </svg>
                      <p>{rat.containerType}</p>

                    </div>
                
                    <p>$ {rat.rate}</p>

                  </div>
              ))}

              </div>

              <div className='w-1/2 flex justify-center items-start flex-col px-4'>
                <p className=' font-semibold my-2'>Remarks:</p>
                {arr.map((remark,index)=>(
                  <div className='w-full flex justify-start items-center gap-x-4 gap-y-2' key={index}>
                    <p className='text-sm text-justify'>* {remark}.</p>
                  </div>
              ))}
              </div>
          </div>
         </>}
       

    </div>
  )
}

export default RateTile

