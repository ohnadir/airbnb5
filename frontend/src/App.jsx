import 'antd/dist/reset.css'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux';
import { loadUser } from "./Redux/actions/user"
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"
import Dashboard from './pages/Profile/Dashboard';
import Checkout from "./pages/Checkout"
import Confirmation from "./pages/Confirmation"
import Home from "./pages/Home"
import PlaceDetails from './pages/PlaceDetails';
import MobileProfile from './pages/MobileProfile';
import Trip from './pages/Profile/Trip';
import SearchPlace from './pages/SearchPlace';
import 'mapbox-gl/dist/mapbox-gl.css';
import PrivateRoute from './components/PrivateRoute';

// aos animation
import 'aos/dist/aos.css';
import AOS from 'aos';
import RegionalPlace from './pages/RegionalPlace';
import Map from './pages/Map';

function App() {
  const [authModal, setAuthModal] = useState(false);
  const [navPosition, setNavPosition] = useState("")
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(()=>{
    if(token){
      dispatch(loadUser(token));
    }
  },[token, dispatch]);
  AOS.init({ duration : 1000});

  const id = JSON.parse(localStorage.getItem("placeId"));
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === `/placeDetails/${id}`) {
      setNavPosition("static")
    }
    else{
      setNavPosition("sticky");
    }
  }, [location, id]);
  return (
    <>
      <Navbar navPosition={navPosition} authModal={authModal} setAuthModal={setAuthModal} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/placeDetails/:id' element={<PlaceDetails/>} />
        <Route path='/dashboard' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <Dashboard/>
          </PrivateRoute>
        } />
        
        <Route path='/checkout/:id' element={<Checkout/>} />
        <Route path='/confirmation/:id' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <Confirmation/>
          </PrivateRoute>
        } />
        <Route path='/profile' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <MobileProfile/>
          </PrivateRoute>
        } />
        <Route path='/trip' element={
          <PrivateRoute setAuthModal={setAuthModal}>
            <Trip/>
          </PrivateRoute>
        }/>
        <Route path='/regional/:region' element={<RegionalPlace/>} />
        <Route path='/search-place/:keyword' element={<SearchPlace/>} />
        <Route path='/search' element={<SearchPlace/>} />
        <Route path='/map' element={<Map/>} />
      </Routes>
    </>
  )
}

export default App
