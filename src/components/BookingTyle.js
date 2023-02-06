import React from 'react'

const BookingTyle = ({bookingID, route, date,status, containers,containerMode}) => {

    const seemore = ()=>{

    }
   
  return (
        <div className="w-full flex p-4 bg-white shadow-md hover:shodow-lg rounded-xl my-1">
          <div className="w-[90%] flex flex-col">
            <div className='w-full flex justify-between items-center'>
                <span>{bookingID}</span>
                <span>{route}</span>
                <span className='text-xs'>{date}</span>
                <span className= {`px-2 py-1 rounded-lg text-sm text-white ${status==="Booking completed"? "bg-green-600": status==="Booking in progress"? "bg-orange-600": "bg-red-900"}`}>{status}</span>
                
            </div>

            <div className='mt-2 flex w-3/4 justify-start items-center gap-4'>
                <span className='bg-slate-200 px-2 py-1 rounded-lg text-sm'>{containerMode}</span>
                {containers?.map(cargo=>(
                    <div className='bg-slate-200 px-2 py-1 rounded-lg text-sm gap-2' key={cargo.id}>{cargo.containerCount} X {cargo.containerType}</div>
                ))}

            </div>

          </div>

          <div className="w-[10%]">
            <div className='w-full flex justify-center items-center p-2'>
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

export default BookingTyle