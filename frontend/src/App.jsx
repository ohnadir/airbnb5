import 'antd/dist/reset.css'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux';
import { loadUser } from "./Redux/actions/user"
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard/index';
import Checkout from "./pages/Checkout"
import Invoice from "./pages/Invoice"
import Home from "./pages/Home"
import PlaceDetails from './pages/PlaceDetails';
import MobileProfile from './pages/MobileProfile';
import Trip from './pages/Trip';
import SearchPlace from './pages/SearchPlace';
import 'mapbox-gl/dist/mapbox-gl.css';
import PrivateRoute from './components/PrivateRoute';

// aos animation
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  const [authModal, setAuthModal] = useState(false);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(()=>{
    if(token){
      dispatch(loadUser(token));
    }
  },[token]);
  AOS.init({ duration : 1000});
  return (
    <>
      <Navbar authModal={authModal} setAuthModal={setAuthModal} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/placeDetails/:id' element={<PlaceDetails/>} />
        <Route path='/dashboard' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <Dashboard/>
          </PrivateRoute>
        } />
        
        <Route path='/checkout/:id' element={<Checkout/>} />
        <Route path='/invoice' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <Invoice/>
          </PrivateRoute>
        } />
        <Route path='/mobileProfile' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <MobileProfile/>
          </PrivateRoute>
        } />
        <Route path='/trip' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <Trip/>
          </PrivateRoute>
        }/>
        <Route path='/search-place/:keyword' element={<SearchPlace/>} />
        <Route path='/search-place' element={<SearchPlace/>} />
      </Routes>
    </>
  )
}

export default App
