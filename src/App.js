import Process from './pages/Process';
import About from './pages/About';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {useSelector} from 'react-redux';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Profile from './components/Profile';
import Queries from './components/Queries';
import Bookings from './components/Bookings';


function App() {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/catogaries' element={<SubPage />} /> */}
        <Route path='/process' element={<Process />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/queries' element={<Queries />} />
        <Route path='/bookings' element={<Bookings />} />



      </Routes>
    </>
  );
   
}

export default App;


