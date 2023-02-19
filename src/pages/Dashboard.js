import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import { booking, gridParts, recentAct, recentMails, recentSearches } from '../Data'
import SliderAct from '../sliders/SliderActs'
import SliderBookings from '../sliders/SliderBookings'
import SliderMails from '../sliders/SliderMails'
import SliderQueries from '../sliders/SliderQueries'
import {useSelector} from 'react-redux';
import UserDashboard from './UserDashboard'
import AdmindashBD from './AdmindashBD'
import SalesDashBD from './SalesDashBD'
import RatesDashBD from './RatesDashBD'
import CRDashBD from './CRDashBD'

const Dashboard = () => {
    const isLoggedIn = useSelector((state)=> state.isLoggedIn);

    const [role,setRole] = useState("");
    const [id,setID] = useState("");

    useEffect(() => {
        setRole(localStorage.getItem("role"))
        setID(localStorage.getItem("userID"))
        // setMail(localStorage.getItem("userEmail"))
    
    }, []);

    // const handleCheck = () => {

    // }

  return (
    <>
    <Navbar/>
    <Sidenavbar role={role}/>
    {/* {conditionalDashboard} */}
    {role==="admin"? <AdmindashBD /> : role==="salesman"? <SalesDashBD/> : role==="ratesmanager"? <RatesDashBD/>: role==="crd"? <CRDashBD/> : <UserDashboard /> }
    
    
  
    </>
   
  )
}

export default Dashboard
//