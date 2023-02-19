import React from 'react'
import {useNavigate } from 'react-router-dom';

const AlertQuery = ({origin, destination, type, cargos, show, close, rDate, title}) => {
    const navigate = useNavigate();

    if(!show){
        return null
    }

  return (
    <div className={`${show? "fixed inset-0" : "hidden"}  bg-gray-900 bg-opacity-50 w-full flex justify-center items-center md:ml-20`}>
            <div className={`flex flex-col bg-white w-1/2 gap-4 rounded-lg shadow-lg`}>
            <h3 className='text-lg font-semibold text-center p-4 bg-sky-700 text-white'>{title}</h3>

            <div className='w-full flex flex-col justify-center items-center'>

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[50%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <p>Route :</p>
                    </div>

                    <div className='w-[50%] flex flex-col justify-center items-start'>
                    <p>{origin} - {destination}</p>
                    </div>

                </div>

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[50%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <p>Cargo ready date :</p>
                    </div>

                    <div className='w-[50%] flex flex-col justify-center items-start'>
                    <p>{rDate}</p>
                    </div>

                </div>

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[50%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <p>Shipment type :</p>
                    </div>
                    <div className='w-[50%] flex flex-col justify-center items-start'>
                        <p>{type}</p>
                    </div> 
                </div>

                <div className='w-full flex justify-center items-center p-1'>
                    <div className='w-[50%] flex flex-col justify-center items-end px-10 font-semibold'>
                        <p>Cargo :</p>
                    </div>
                    <div className='w-[50%] flex flex-col justify-center items-start'>
                        {cargos.map((cargo,index)=>
                            <div className='w-full'>
                                <div className='flex flex-col gap-2 w-full justify-center items-start' key={index}>
                                {type==="FCL"? 
                                    <div className='flex justify-center items-start gap-6'>
                                        <p>{cargo.containerType}</p>
                                        <p>{cargo.quantity}</p>

                                    </div>: 
                                    <div className='flex justify-center items-start gap-4'>
                                        <p>{cargo.PKGStype}</p>
                                        <p>{cargo.PKGScount} Pkgs</p>
                                        <p>{cargo.PKGSvolume} Cbm</p>
                                        <p>{cargo.PKGSGweight} Kg</p>
                                        <p>{cargo.PKGSNweight} Kg</p>
                                    </div>
                                }
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

     
            
            <div className='flex w-full justify-center gap-5 items-center mb-5'>
                <button onClick={close}
                className="flex text-base items-center mt-3 justify-center w-[120px]  px-8 py-2 font-semibold text-white capitalize bg-red-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>cancel</span>
                </button> 
                <button onClick={()=> navigate("/dashbord")}
                className="flex text-base items-center mt-3 justify-center w-[120px]  px-8 py-2 font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>ok</span>
                </button> 
            </div>

            </div>
        {/* </div> */}

    </div>

    
    )
}

export default AlertQuery