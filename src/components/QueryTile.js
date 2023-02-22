import React from 'react'
import { codes } from '../Data'
import ship from '../assets/vessel.jpg'
import moment from 'moment';

const QueryTile = ({ OportName, DportName,containerMode, cargos, status, rDate, savedDate}) => {

    const OportKeys = OportName.split(",");
    const DportKeys = DportName.split(",");
    console.log(OportKeys)
    console.log(DportKeys)


    // const Ocode = codes[codes.findIndex(element=> element.name.toLowerCase() === OCountry.toLowerCase())].code.toLowerCase();
    // console.log(Ocode)

    // const Dcode = codes[codes.findIndex(element=> element.name.toLowerCase() === DCountry.toLowerCase())].code.toLowerCase();    
    // console.log(Dcode)

    const seemore = ()=>{
    }

  return (
        <div className="w-full flex bg-white shadow-md hover:shodow-lg rounded-md my-4">
          <div className="w-[93%] flex flex-col p-4">
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
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

                {/* <img src={ship} alt='' className='w-10 h-8' /> */}
                <p className={`px-3 mt-1 py-1 text-white ${status.includes("query")? "bg-red-500": status.includes("confirmation")? "bg-yellow-500": "bg-green-500"} rounded-md shadow-md`}>{status}</p>

                <div className='flex justify-center items-center gap-2'>
                  <p className='text-xm text-gray-400'>ready by:</p>
                  <p>{rDate}</p>

                </div>

            </div>

            <div className='w-full flex justify-between items-center'>
                <div className='mt-2 flex w-3/4 justify-start items-center gap-4'>
                    <span className='bg-slate-200 px-2 py-1 rounded-lg text-sm'>{containerMode}</span>
                    {cargos?.map(cargo=>(
                        <div className='bg-slate-200 px-2 py-1 rounded-lg text-sm gap-2' key={cargo.id}>{cargo.quantity} X {cargo.containerType}</div>
                    ))}

                </div>
                <div className='flex justify-center items-center gap-2'>
                  <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-5 h-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                  <p>{moment(savedDate).fromNow()}</p>

                </div>

            </div>
           

          </div>

          <div className="w-[7%] bg-orange-500 flex justify-center items-center ml-5 hover:bg-orange-700">
            <div className='w-[50px] h-[50px] flex justify-center items-center p-2  text-white rounded-full'>
                <button onClick={seemore}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                </button>
              
            </div>
           
          </div>
      </div>  )
}

export default QueryTile