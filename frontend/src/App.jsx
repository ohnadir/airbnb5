import 'antd/dist/reset.css'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux';
import { loadUser } from "./Redux/actions/user"
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
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
      <Dashboard/>
      <Routes>
        {/* <Route path='/dashboard' element={Dashboard}></Route> */}
      </Routes>
    </div>
  )
}

export default App
