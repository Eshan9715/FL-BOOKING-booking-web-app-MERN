import React from 'react'
import moment from 'moment';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import AddRates from './AddRates';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
//import Checkbox from '@mui/material/Checkbox';


const RueryTile = ({ OportName, DportName,containerMode, cargos, status, rDate, savedDate, user, company,id}) => {
    const[show, setShow] = useState(false)
    const[more, setMore] = useState(false)

    const OportKeys = OportName.split(",");
    const DportKeys = DportName.split(",");
    console.log(OportKeys)
    console.log(DportKeys)
    const day = rDate.split(",")[1]   
    const [vRates, setVRates] = useState([])

    //const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    useEffect(() => {
        //setID(localStorage.getItem("userID"))
        //console.log(id)
        // var ID = status!=='pending' && id
        // console.log(ID)

        const getRate = ()=>{
          axios
          .get(`http://localhost:5000/api/fclquery`)
          .then((res) => {
            console.log(res.data);
            setVRates(res.data.fclquries)
          })
          .catch(err=> {
            console.log(err);
          })     
        }
        getRate();
    
        
    }, [id,status]);

    console.log(vRates)

    // var arr =[]
    // var arrr =[]

    // var len = 0

    // const remarks = ()=>{
    //     vRates.filter(e=>e.status!=='pending').map((rat,index)=>(
    //          arr = rat.remarks.split("."),
    //          len = rat.remarks.split(".").length
    //          arr.splice(len-1,1)
    //     ))
    // }
//     vRates.filter(e=>e.status!=='pending').map((rat,index)=>(
//         arr = rat.remarks.split("."),
//         let len = rat.remarks.split(".").length,
//         arr.splice(len-1,1),

//        arr.map((remark,index)=>(
//            <div className='w-full flex justify-start items-center gap-x-4 gap-y-2' key={index}>
//            <p className='text-sm text-justify'>* {remark}.</p>
//            </div>
//    ))

    // const arr = remarks.split(".");
    // var len = remarks.split(".").length;
    // arr.splice(len-1,1)
  

    // const Ocode = codes[codes.findIndex(element=> element.name.toLowerCase() === OCountry.toLowerCase())].code.toLowerCase();
    // console.log(Ocode)

    // const Dcode = codes[codes.findIndex(element=> element.name.toLowerCase() === DCountry.toLowerCase())].code.toLowerCase();    
    // console.log(Dcode)

  return (
        <div className='flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-md mt-3 mb-2'>
            <div className="w-full flex justify-center items-center">
                <div className="w-[54%] flex flex-col p-4">
                    <div className='w-full flex justify-start items-center gap-2'>
                            <div className='flex justify-center items-center gap-2'>
                                <span>{OportKeys[0]},</span>
                                <span>{OportKeys[1]}</span>
                                <img src={`https://flagcdn.com/20x15/${OportKeys[2].toLowerCase()}.png`} alt="flag" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                            </svg>
                            <div className='flex justify-center items-center gap-2'>
                                <span>{DportKeys[0]},</span>
                                <span>{DportKeys[1]}</span>
                                <img src={`https://flagcdn.com/20x15/${DportKeys[2].toLowerCase()}.png`} alt="flag" />
                            </div>
                    </div>

                    <div className='mt-2 flex justify-start items-center gap-4'>
                        <span className='bg-slate-200 px-2 py-1 rounded-lg text-sm'>{containerMode}</span>
                        {cargos?.map(cargo=>(
                            <div className='bg-slate-200 px-2 py-1 rounded-lg text-sm gap-2' key={cargo.id}>{cargo.quantity} X {cargo.containerType}</div>
                        ))}

                    </div>

                </div>

                <div className="w-[20%] flex flex-col p-4 gap-2">
                    <div className='flex justify-start items-center gap-2'>
                        <p className='text-xm text-gray-400'>company:</p>
                        <p className='px-3 mt-1 py-1 text-white rounded-md shadow-lg bg-red-500'>{company}</p>
                    </div>

                    <div className='flex justify-start items-center gap-2'>
                        <p className='text-xm text-gray-400'>shipper:</p>
                        <p className='px-3 mt-1 py-1 border-2 rounded-md bg-white'>{user}</p>
                    </div>

                </div>

                <div className="w-[20%] flex flex-col p-4 my-2 gap-3">
                    <div className='flex justify-start items-center gap-2'>
                        <p className='text-xm text-gray-400'>ready by:</p>
                        <p>{day}</p>
                    </div>

                    <div className='flex justify-start items-center gap-2'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-5 h-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        <p>{moment(savedDate).fromNow()}</p>

                    </div>

                </div>

                <div className="w-[6%] flex justify-center items-center ml-5">
                    <div className='w-full flex justify-center items-center p-2 text-white rounded-md mr-4'>
                    {status ==="pending"?
                        <button onClick={()=>setShow(!show)} className={`flex ${show? "border-2 text-black bg-white border-black":"bg-orange-500 text-white"} rounded-full items-center justify-center px-2 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" className="w-8 h-8 rtl:-scale-x-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                            </svg>
                        </button>
                        : 
                        <button onClick={()=>setMore(!more)} className={`flex w-full ${more? "border-2 text-black bg-white border-black":"bg-orange-500 text-white"} rounded-full items-center justify-center px-2.5 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                        {more && <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-8 h-8 rtl:-scale-x-100' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                                </svg>}
                        {!more &&<svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-8 h-8 rtl:-scale-x-100' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                </svg>}
                        </button>
                        
                    }
                    
                    </div>
                
                </div>
        

                
            </div>

            {more && 
                <>
                {status!=='pending' &&
                <>
                    <div className='h-0.5 bg-gray-300 w-full my-1 px-4'></div>
                    <div className='w-full flex justify-start items-start my-3 text-gray-400 ml-3'>
                        <div className='w-3/5 flex justify-center items-start flex-col px-4'>
                            <p className=' font-semibold text-xs mb-2'>Adding Rates :</p>

                            {vRates.filter(e=>e._id===id).map((rat,index)=>(

                                rat.rates.map((re,index)=>(
                                <div className='w-full flex justify-start items-center gap-x-8 gap-y-3' key={index}>
                                    <div className='w-[20%] flex justify-start items-center gap-1'>
                                        <DirectionsBoatFilledIcon sx={{ color: 'blue' }}/>
                                        <p className='text-black'>{re.shipLine}</p>

                                    </div>
                                    <div className='w-[10%] flex justify-start items-center'>
                                        <p className='text-black'>{re.container}</p>
                                    </div>

                                    <div className='w-[20%] flex justify-start items-center'>
                                        <p className='text-black'>$ {re.rate}</p>
                                    </div>
                                    <div className='w-[40%] flex justify-start items-center'>
                                        <p>valid till :</p>
                                        <p className='text-black'>{re.validDate}</p>
                                    </div>
                                    {/* <div className='w-[10%] flex justify-start items-center'>

                                        <Checkbox {...label} size="small" />
                                    </div> */}

                                </div>
                            ))))}
                        </div>

                        <div className='w-2/5 flex justify-center items-start flex-col px-4 ml-4'>
                            <p className=' font-semibold text-xs mt-2'>Remarks :</p>
                            {vRates.filter(e=>e.status!=='pending' && e._id===id).map((rat)=>(
                                                        
                                ((rat.remarks?.split(".")).filter(e=>e!=='')).map((remark,index)=>(
                                    <div className='w-full flex justify-start items-center gap-x-4 gap-y-2' key={index}>
                                    <p className='text-sm text-justify mt-1'>* {remark}.</p>

                                    </div>
                            ))

                            ))}
                        </div>            
                    </div>  
                </>
                }
                </>
            }

            <AddRates show={show} title='Add rates' id={id} close={()=>setShow(false)} />

        </div>
       
     
    )
}

export default RueryTile