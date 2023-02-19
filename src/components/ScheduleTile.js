import React from 'react'
// import ProgressBar from './ProgressBar'
import vessell from '../assets/vessel.jpg'
import scroute from '../assets/scroute.png' 

const ScheduleTile = ({Odate,Ddate,origin,Destination,shipline,vessel,service,transit,transhipCount,rate}) => {
  return (
    <div className="w-[95%] flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-2xl mt-3 mb-2">
         <div className='w-full flex justify-center items-center'>
            <div className='w-[45%] flex justify-start items-center h-full p-2'>
              <div className='w-full flex justify-start flex-row gap-2'>
                <img src={scroute} alt='' className='w-10 h-full'/>

                <div className='flex justify-center items-start flex-col gap-2'>

                  <div className='flex text-sm justify-center items-start gap-2 font-semibold'>
                    <h3>{Odate}</h3>
                    <h3>{origin}</h3>
                    {/* <h3>Odate</h3>
                    <h3>origin</h3> */}
                  </div>

                  <div className='flex justify-center items-start flex-col'>
                    <div className='flex justify-center items-start  gap-2'>
                      <img src={vessell} alt='' className='w-8 h-6' />
                      <p>{shipline}</p>
                      <p>{vessel}</p>
                      {/* <p>Ddate</p>
                      <p>Destination</p> */}
                    </div>
                    <div className='flex justify-center items-start  gap-2'>
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-8 h-4 mt-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"></path>
                    </svg>
                        <p>service :</p>
                      <p>{service}</p>
                      {/* <p>Ddate</p>
                      <p>Destination</p> */}
                    </div>

                  </div>

                  <div className='flex text-sm justify-center items-start  gap-2 font-semibold'>
                    <h3>{Ddate}</h3>
                    <h3>{Destination}</h3>
                    {/* <h3>Ddate</h3>
                    <h3>Destination</h3> */}
                  </div>

                </div>
              </div>
            </div>

            <div className='w-[45%] flex justify-center items-center h-full'>
              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col gap-2 px-4'>
                    <div className='flex justify-start items-center gap-2'>
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mt-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                    </svg>
                    <h3>{transit} days</h3>

                    </div>
                    <div className='flex justify-center items-center gap-2'>
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-6 h-6 mt-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
                    </svg>
                    <h3>{transhipCount} Transhipment</h3>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                  <h3 className='px-6 py-3 w-[200px] rounded-md text-center shadow-md bg-red-600 text-base font-semibold text-white'>$ {rate}</h3>
                  <button type='submit'
                    className="flex items-center justify-center w-[200px] px-6 py-3 text-base tracking-wide capitalize transition-colors duration-300 transform bg-white border-2 rounded-md hover:border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>More details </span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rtl:-scale-x-100 mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
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
    </div>
  )
}

export default ScheduleTile

