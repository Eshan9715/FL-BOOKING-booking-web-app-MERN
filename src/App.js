import About from './pages/About';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {useSelector} from 'react-redux';
import BQuering from './pages/BQuering';
import Dashboard from './pages/Dashboard';
import Profile from './components/Profile';
import Bookings from './components/Bookings';
// import SalesDashBD from './pages/SalesDashBD';
// import RatesDashBD from './pages/RatesDashBD';
// import AdmindashBD from './pages/AdmindashBD';
// import CRDashBD from './pages/CRDashBD';
import Booking from './pages/Booking';
import Rates from './pages/Rates';
// import  MuiTable  from './components/MuiTable';
import BookingSummery from './components/BookingSummery';
import Popup from './components/PopupUI';
import { BasicDateTimePicker } from './components/BasicDateTimePicker';
import BLD from './pages/BLD';
import Settings from './pages/Settings';
import Clients from './pages/Clients';
import Staff from './pages/Staff';


function App() {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/catogaries' element={<SubPage />} /> */}
        <Route path='/process' element={<BQuering />} />
        <Route path='/about' element={<BookingSummery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/bquering' element={<BQuering />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/rates' element={<Rates />} />


        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/saldashboard' element={<SalesDashBD />} />
        <Route path='/ratdashboard' element={<RatesDashBD />} />
        <Route path='/admindashboard' element={<AdmindashBD />} />
        <Route path='/crdashboard' element={<CRDashBD />} /> */}

        <Route path='/profile' element={<Profile />} />
        <Route path='/bookings' element={<BLD />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/staff' element={<Staff />} />







      </Routes>
    </>
  );
   
}

export default App;


