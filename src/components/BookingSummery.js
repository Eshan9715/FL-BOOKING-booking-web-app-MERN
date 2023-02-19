import React from 'react'
import fli from '../assets/FLI.jpg'

const BookingSummery = () => {
  return (
    <div className='w-full mt-8 flex justify-center items-center'>
      <div className='w-3/4 flex flex-col justify-center items-center shadow-lg'>
      <h2 className='w-full text-center font-semibold text-xl p-3 bg-blue-900 text-white'>Booking Forum</h2>
      <div className='w-full flex justify-center items-center mt-2'>
        <div className='w-1/2 flex flex-col'>

          <div className='w-full flex flex-col '>
            <h3 className='bg-blue-900 p-2 text-white'>Shipper</h3>
            <div className='p-2'>
              <h3>Timber factory srilanka</h3>
              <p>No: 100, Main road</p>
              <p>Colombo, Srilanka</p>
              <p>011-3243245</p>
            </div>

          </div>

          <div className='w-full flex flex-col '>
            <h3 className='bg-blue-900 p-2 text-white'>Consignee</h3>
            <div className='p-2'>
              <h3>Timber factory srilanka</h3>
              <p>No: 100, Main road</p>
              <p>Colombo, Srilanka</p>
              <p>011-3243245</p>
            </div>
          </div>

          <div className='w-full flex flex-col '>
            <h3 className='bg-blue-900 p-2 text-white'>Notify party</h3>
            <div className='p-2'>
              <h3>Timber factory srilanka</h3>
              <p>No: 100, Main road</p>
              <p>Colombo, Srilanka</p>
              <p>011-3243245</p>
            </div>

          </div>
        

        </div>

        <div className='w-1/2 flex flex-col '>
          <img src={fli} alt='' className='p-2'/>
          <p className='p-3 text-justify'>Freight Links International is one of the region's leading providers in Supply Chain Solutions.</p>
          <p className='p-3 text-justify'>Whether it be carriage of goods over land, ocean or air, our dedicated team of experienced
           professionals would identify and design logistics solutions to meet the exact needs of any customer,
            and ensure safe delivery of cargo from the point of origin to the destination. To do so, efficiently
             and cost effectively, we have geared ourselves with the latest ICT facilities. From our small beginnings
             .</p>

        </div>
      </div>
      
      <div className='w-full flex justify-center items-center my-2 gap-2'>
      
        <div className='w-1/4 flex flex-col'>
          <div className='w-full flex flex-col '>
            <h3 className='bg-blue-900 p-2 text-white'>Port of Origin</h3>
            <div className='p-2'>
              <p>Colombo</p>
            </div>

          </div>
         
        </div>

        <div className='w-1/4 flex flex-col'>
          <div className='w-full flex flex-col '>
            <h3 className='bg-blue-900 p-2 text-white'>Port of Destination</h3>
            <div className='p-2'>
              <p>Dubai</p>
            </div>

          </div>
         
        </div>
        
        <div className='w-1/4 flex flex-col'>
          <div className='w-full flex flex-col '>
            <h3 className='bg-blue-900 p-2 text-white'>Vessel</h3>
            <div className='p-2'>
              <p>MSC Ayodya</p>
            </div>

          </div>
         
        </div>
        
        <div className='w-1/4 flex flex-col'>
          <div className='w-full flex flex-col '>
            <h3 className='bg-blue-900 p-2 text-white'>Voyage</h3>
            <div className='p-2'>
              <p>aw 3456</p>
            </div>

          </div>
         
        </div>
        

      </div>

      <div className='w-full flex justify-center items-center my-2 gap-2'>
      
      <div className='w-1/3 flex flex-col'>
        <div className='w-full flex flex-col '>
          <h3 className='bg-blue-900 p-2 text-white'>Type of service</h3>
          <div className='p-2'>
            <p>FCL</p>
          </div>

        </div>
       
      </div>

      <div className='w-1/3 flex flex-col'>
        <div className='w-full flex flex-col '>
          <h3 className='bg-blue-900 p-2 text-white'>Inco term</h3>
          <div className='p-2'>
            <p>CIF</p>
          </div>

        </div>
       
      </div>
      
      <div className='w-1/3 flex flex-col'>
        <div className='w-full flex flex-col '>
          <h3 className='bg-blue-900 p-2 text-white'>Cargo readyness date</h3>
          <div className='p-2'>
            <p>12.12.2022</p>
          </div>

        </div>
       
      </div>
      
      
      

      </div>

      <div className='w-full flex justify-center  items-center my-2 mb-5'>
      
      <div className='w-1/2 flex flex-col'>
        <div className='w-full flex flex-col pr-2'>
          <h3 className='bg-blue-900 p-2 text-white'>Commodity</h3>
          <div className='p-2'>
            <p>Wood and papers</p>
          </div>

        </div>
       
      </div>


      <div className='w-1/2 flex flex-col'>
        <div className='w-full flex flex-col '>
          <h3 className='bg-blue-900 p-2 text-white'>HS Code</h3>
          <div className='p-2'>
            <p>SD 4420 </p>
          </div>

        </div>
       
      </div>
      

      </div>


      {/* <div className='w-3/4 flex justify-center items-center my-2'>
      
      <div className='w-1/4 flex flex-col'>
        <div className='w-full flex flex-col pr-2'>
          <h3 className='bg-blue-900 p-2 text-white'>No: Packages</h3>
          <div className='p-2'>
            <p>222</p>
          </div>

        </div>
       
      </div>

      <div className='w-1/4 flex flex-col'>
        <div className='w-full flex flex-col pr-2'>
          <h3 className='bg-blue-900 p-2 text-white'>Gross Weight</h3>
          <div className='p-2'>
            <p>1232.1 Kg</p>
          </div>

        </div>
       
      </div>
      
      <div className='w-1/4 flex flex-col'>
        <div className='w-full flex flex-col pr-2'>
          <h3 className='bg-blue-900 p-2 text-white'>Net Weight</h3>
          <div className='p-2'>
            <p>1132.1 Kg</p>
          </div>

        </div>
       
      </div>
      
      <div className='w-1/4 flex flex-col'>
        <div className='w-full flex flex-col '>
          <h3 className='bg-blue-900 p-2 text-white'>Volume</h3>
          <div className='p-2'>
            <p>20 Cbm</p>
          </div>

        </div>
       
      </div>
      

      </div> */}

      
     




      </div>
      
    </div>
  )
}

export default BookingSummery