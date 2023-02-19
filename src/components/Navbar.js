import React, { useState, useEffect } from 'react'
import Button from './button';
import { Link, useNavigate } from 'react-router-dom';
import fri from '../assets/fri.png'
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../store';
import user from '../assets/user.png'

const Navbar = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [pic, setPic] = useState('');
  const [mail, setMail] = useState('');
  const navigate = useNavigate();

  const [show, setShow] = useState(false)

  useEffect(() => {
    setName(localStorage.getItem("userName"))
    setPic(localStorage.getItem("userImage"))
    setMail(localStorage.getItem("userEmail"))

}, []);

  const handleAuth = ()=>{
    dispatch(authActions.logout());
    localStorage.clear();
    navigate("/login")

  }

  const handleDashBoard = () =>{
    navigate("/dashboard")
  }

  const showWindow = ()=>{
    setShow(!show);
  }

  // console.log(data.userName.slice(0,5))


    let Links =[
      {name:"Home",link:"/"},
      {name:"Booking",link:"/booking"},
      {name:"Process",link:"/process"},
    ];
    let [open,setOpen]=useState(false);

  return (
    <div className='shadow-md w-[100%] fixed bg-white z-50'>
      <div className='md:flex items-center justify-between py-2 md:px-10 px-7'>
        <div className='font-bold text-xl cursor-pointer flex items-center font-Monserrat 
        text-black'>
          <div className='w-8 md:w-12 lg:w-16'>
            <img src={fri} alt=''className='rounded-full'/>
          </div>
          FLI-BOOKING
        </div>
      
        <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-2 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-lg md:my-0 my-3'>
                <Link to={link.link} className='text-black hover:text-gray-400 duration-500 font-Monserrat '>{link.name}</Link>
              </li>
            ))
          }
         
          <div className='flex flex-col md:flex-row'>
            {
              isLoggedIn && 
              <>
                <div className='bg-white flex justify-center items-center gap-3 border-2 text-center font-Monserrat font-bold py-2 px-6 rounded md:ml-8 hover:bg-orange-400 
                duration-500 w-[250px] mt-5 md:w-[200px] md:mt-2'> 
                <img src={pic} alt='' className='w-10 h-10 rounded-full'/>
                <span>{name && name.split(" ")[0]}</span>
                <button onClick={showWindow}><svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-4 h-4 mt-1 font-bold cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                </button>
                </div>
                <div class={`z-[90] ${show? "absolute top-[60px] right-10": "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-300 rounded-lg shadow`}>
                  <div class="px-2.5 py-3">
                    <span class="block text-sm font-medium">{name}</span>
                    <span class="block text-sm truncate">{mail}</span>
                  </div>
                  <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <p className="block px-4 py-2 text-sm hover:bg-orange-600 hover:text-white cursor-pointer" onClick={handleDashBoard}>Dashboard</p>
                    </li>                            
                    <li>
                    <p className="block px-4 py-2 text-sm hover:bg-orange-600 hover:text-white cursor-pointer" onClick={handleAuth}>logout</p>

                    {/* <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='logout' handleClick={handleAuth} >logout</Button></Link> */}
                    </li>
                  </ul>
                </div>
              </>
          
            }

            {!isLoggedIn && <> 
                        {/* <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button>Sign In</Button></Link> */}
                        <Link to='/register' className='text-gray-800 hover:text-gray-400 duration-500 font-Monserrat '><Button name='Sign up' color={'orange-500'} hoverColor={'white'} textColor={'white'} hoverTextColor={'black'}></Button></Link>
                         </>
            }
           
          </div>
        

        </ul>
      </div>
    </div>
               
  )
}

export default Navbar;


