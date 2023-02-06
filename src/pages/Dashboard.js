import React from 'react'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import { booking, gridParts, recentAct, recentMails, recentSearches } from '../Data'
import SliderAct from '../sliders/SliderActs'
import SliderBookings from '../sliders/SliderBookings'
import SliderMails from '../sliders/SliderMails'
import SliderQueries from '../sliders/SliderQueries'

const Dashboard = () => {

  return (
    <>
    <Navbar/>
    <Sidenavbar role='Shipper'/>
    <div className="min-h-screen w-screen flex text-black bg-gradient-to-b from-blue-500 to-gray-900">
        <div className='w-[98%]'>
            <div className='grid grid-cols-4 h-[100px] mt-[110px] ml-[220px] gap-4'>
            {gridParts.map((part)=>(
                <div className='p-5 border-2 w-full flex justify-between items-center bg-white rounded-lg'>
                    {part.icon}
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-semibold text-lg'>{part.val}</p>
                    <p className='font-semibold text-lg'>{part.desc}</p>
                </div>
                  
                </div>
            ))}

            </div>
         
            <div className='grid grid-cols-2 my-10 ml-[220px] gap-4'>
                <div className='flex flex-col'>
                    <div className='w-full flex justify-between items-center bg-white rounded-lg p-4 mb-3'>
                        <div className='flex justify-center items-center gap-2'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" className="w-8 h-8 rtl:-scale-x-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                        </svg>
                        <p className='font-semibold text-lg'>Recent Queries</p>           
                        </div>
                        <button type='submit'
                            className="flex items-center justify-between w-[100px] h-[40px] px-3 py-1 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>view</span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button> 
                    </div>

                    <SliderQueries data={recentSearches}/>

                    <div className='w-full flex justify-between items-center bg-white rounded-lg p-4 mb-3'>
                        <div className='flex justify-center items-center gap-2'>
                        <svg fill="none" stroke="currentColor" className="w-6 h-6 rtl:-scale-x-100" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path>
                        </svg>
                        <p className='font-semibold text-lg'>Recent Bookings</p>           
                        </div>
                        <button type='submit'
                            className="flex items-center justify-between w-[100px] h-[40px] px-3 py-1 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>view</span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button> 
                    </div>

                    <SliderBookings data={booking}/>


                   
                    {/* {recentSearches.map((search)=>(
                        <QueryTile key={search.id}
                            OportCode={search.originCode} 
                            OportName={search.originPort} 
                            OCountry={search.originCountry} 
                            containerMode={search.containerMode}
                            cargos={search.containers} 
                            DportCode={search.departCode} 
                            DportName={search.departPort} 
                            DCountry={search.departCountry}>
                        </QueryTile>
                    ))} */}
                </div>
                

                <div className='flex flex-col'>
                    <div className='w-full flex justify-between items-center bg-white rounded-lg p-4'>
                        <div className='flex justify-center items-center gap-2'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" className="w-8 h-8 rtl:-scale-x-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                        </svg>
                        <p className='font-semibold text-lg'>Recent activities</p>           
                        </div>
                        <button type='submit'
                            className="flex items-center justify-between w-[100px] h-[40px] px-3 py-1 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>view</span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button> 
                    </div>    

                    <SliderAct data={recentAct}/>   

                    <div className='flex justify-between items-center gap-2 mt-5 bg-white p-4 rounded-lg'>
                        <div className='flex justify-center items-center gap-2'>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                            </svg>
                            <p className='font-semibold text-lg'>Recent Mails</p>    
                        </div>
                        <button type='submit'
                            className="flex items-center justify-between w-[100px] h-[40px] px-3 py-1 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>view</span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button> 
                        </div>
                       
                    <SliderMails data={recentMails}/>

                </div>    
                    
                 
                  
                


                   
                  
                
                </div>

            </div>
            

               
            </div>
        

    </>
   
  )
}

export default Dashboard
//