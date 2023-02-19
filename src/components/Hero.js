import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'

const Hero = () => {
  return (
    <div className="h-[100vh] w-screen bg-gradient-to-b from-blue-500 to-gray-900 justify-center items-center flex">
    <div className="flex md:max-w-7xl md:mx-auto">
        <div className='flex w-full items-center justify-between'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex-col justify-start md:max-w-2xl md:mx-auto items-center m-10 md:m-2'>
                    <h1 className="mb-4 my-16 text-2xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white md:mx-5">Easiest way to book your cargo.</h1>
                    <p className="mb-6 font-light text-white lg:mb-8 md:text-base lg:text-lg md:mx-5 opacity-95">We provide 24/7 services at Freight-link International.
                     A shipment cannot be transported by sea without being booked and only booked shipments are accepted.</p>

                    <div className='flex flex-col md:flex-row'>
                        <Link to='/register' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='New to here' color={'orange-500'} hoverColor={'white'} textColor={'white'} hoverTextColor={'black'}></Button></Link>
                        <Link to='/booking' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='Check Quatoes' color={'white'} hoverColor={'orange-500'} textColor={'black'} hoverTextColor={'white'} ></Button></Link>

                    </div>
                
                </div>
            
            </div>

            <div className='flex justify-end items-center'>
                <img src='https://www.aibl.lk/public/images/sub_service/29/marine-hull.jpg' alt="sea" className='hidden md:flex md:w-3/4 p-3 m-3 border rounded-xl'/>
            </div>

        </div>
    </div>

</div>  )
}

export default Hero