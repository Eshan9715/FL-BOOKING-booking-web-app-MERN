import React from 'react'

const sliderCol = ({port,containerMode,containerType,rate,currency,flag, validPeriod, vessel,slogo}) => {
  return (
    
        <div className='flex items-center bg-white rounded-lg p-5'>
          <div className='w-full flex justify-center items-start flex-col'>
            <div className='w-full flex justify-between items-center'>
              <div className='flex justify-center items-center gap-3'>
                  <img src={flag} alt='' className='w-6 h-6 rounded-full'/>
                  <span className='font-semibold'>{port}</span>
              </div>

              <div className='flex justify-center items-center gap-3'>
              <h4 className='font-semibold text-xs text-slate-400'>Until <span className='text-sm text-black'> {validPeriod}</span></h4>
              </div>

            </div>

            <div className='w-full flex justify-between items-center'>
              <div className='flex justify-center items-start my-2'>
                <span className='px-3 py-0.5 bg-zinc-200 rounded-lg text-xs'>{containerMode}</span>
                <span className='px-3 py-0.5 bg-zinc-200 rounded-lg ml-3 text-xs'>{containerType}</span>
              </div>

            </div>
             
            <div className='w-full flex justify-between items-center'>
              <div className='flex justify-center items-center my-2'>
                <img src={slogo} alt='' className='w-6 h-6 rounded-full'/>
                {/* <span className='font-semibold text-xs'>{shipline}</span> */}
                <span className='font-semibold text-xs ml-3'>{vessel}</span>
              </div>
              <span className=' font-semibold'>{currency} {rate}</span>

            </div>

               
          </div>
        </div>

    
  )
}

export default sliderCol