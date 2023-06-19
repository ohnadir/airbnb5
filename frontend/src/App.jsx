import 'antd/dist/reset.css'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux';
import { loadUser } from "./Redux/actions/user"
import { useEffect } from 'react';
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

function App() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(()=>{
    if(token){
      dispatch(loadUser(token));
    }
  },[token])
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/placeDetails/:id' element={<PlaceDetails/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/checkout/:id' element={<Checkout/>} />
        <Route path='/invoice' element={<Invoice/>} />
        <Route path='/mobileProfile' element={<MobileProfile/>} />
        <Route path='/trip' element={<Trip/>} />
        <Route path='/search-place/:keyword' element={<SearchPlace/>} />
        <Route path='/search-place' element={<SearchPlace/>} />
      </Routes>
    </>
  )
}

export default App
