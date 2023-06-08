import 'antd/dist/reset.css'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux';
import { loadUser } from "./Redux/actions/user"
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard/index';
import Category from './components/Category';
import Place from './components/place';
import Footer from "./components/Footer"
import Checkout from "./pages/Checkout"

function App() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(()=>{
    if(token){
      dispatch(loadUser(token));
    }
  },[token])
  return (
    <div>
      <Navbar/>
      {/* <Category/> */}
      {/* <Place/> */}
      {/* <Checkout/> */}
      {/* <Footer/> */}
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </div>
  )
}

export default App
