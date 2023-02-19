import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';
import Navbar from './Navbar'
import PopupUI from './PopupUI';
import Sidenavbar from './Sidenavbar'

const Profile = () => {
  const [role,setRole] = useState("");
  const [id,setID] = useState("");
  const [image,setImage] = useState("");
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
      setRole(localStorage.getItem("role"))
      setID(localStorage.getItem("userID"))
      setImage(localStorage.getItem("userImage"))
      setName(localStorage.getItem("userName"))
      setMail(localStorage.getItem("userEmail"))

  }, []);

  const showEdit = ()=>{
    setOpenEdit(!openEdit)
  }

  return (
    <>
    <Navbar/>
    <Sidenavbar role={role}/>
    <div className="min-h-screen w-screen flex text-black bg-gradient-to-b from-blue-500 to-gray-900">
      <div className='ml-[250px] mt-[90px] flex w-[80%] justify-center items-center'>
        <div className='w-full my-4 px-8 py-5 rounded-xl flex justify-center'>

        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div className="px-6">
              <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                      <div className="relative">
                          <img src={image} alt='' className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                      </div>
                  </div>
                  <div className="w-full text-center mt-20">
                      <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                          
                      </div>
                  </div>
              </div>
              <div className="text-center mt-2">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{name}</h3>
                  <div className="text-sm mt-0 mb-2 text-slate-400 font-bold">
                      <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{mail}
                  </div>
              </div>
              <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                      <div className="w-full px-4">
                        <div className='grid grid-cols-2'>
                            <div className='flex justify-center items-center gap-2'>
                              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" className='w-8 h-8 text-red-600' xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
                              </svg>
                              <p>Timber making factory</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" className='w-8 h-8 text-green-600' xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                              </svg>
                              <p>+94 711234234</p>
                            </div>
                        </div>

                      <div className='flex w-full justify-center items-center'>
                        <button onClick={showEdit}
                          className="flex text-base items-center mt-6 justify-center max-w-[150px]  px-8 py-2 font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                          <span>Edit</span>

                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd" />
                          </svg>
                        </button> 
                      </div>

                      <div className={`${openEdit? "fixed inset-0" : "hidden"}  bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full`}>
                        <div className='mt-[200px] ml-[160px]'>
                          <FormInput showEdit={showEdit}/>
                        </div>                          
                      </div>

                      </div>
                  </div>
              </div>
          </div>
        </div>



          
        </div>
      </div>
    </div>

    </>
  )
}

export default Profile

 