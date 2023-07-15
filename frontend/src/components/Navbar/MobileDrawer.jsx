import { useEffect, useState } from 'react';
import './Navbar.scss'
import { FiUser } from 'react-icons/fi'
import { FaAirbnb } from 'react-icons/fa'
import { BiHomeAlt2 } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { IoMdHeartEmpty } from 'react-icons/io';
import { useSelector } from "react-redux"
import { Drawer } from 'antd';
import { useNavigate } from "react-router-dom"

const MobileDrawer = ({drawer, setDrawer, setAuthModal})  => {
    const { isAuthenticated, user } = useSelector(state=>state.auth)
    const navigate = useNavigate()
    const handleRoute=(e)=>{
        if(e === "login"){
            setAuthModal(true)
            setDrawer(false)
        }
        if(e === "profile"){
            navigate('/profile')
            setDrawer(false)
        }
        if(e === "trip"){
            navigate('/trip')
            setDrawer(false)
        }
        if(e === "wish"){
            navigate('/wish')
            setDrawer(false)
        }
        if(e === "home"){
            navigate('/')
            setDrawer(false)
        }
    }
    return (
        <Drawer
            bodyStyle={{"padding": "0px"}}
            width={350}
            headerStyle={{"borderBottom": "0px ", "display": "none"}}
            placement="right" closable={false}
            open={drawer}
        >
        <div className='mobile-bottom-nav mobile-drawer' >
            <div className="brand">
                <FaAirbnb size={38} style={{color : "#ff385c"}} />
                <div className='close-icon' onClick={()=>setDrawer(false)}>
                    <GrFormClose size={18}/>
                </div>
            </div>
            <div className="drawer-links">
                <div className='nav-item' tabIndex="1" onClick={()=>handleRoute("home")}>
                    <BiHomeAlt2 className='icon icons'/>
                    <p>Home</p>
                </div>
                {
                    user?.role === "user"
                    ?
                    <div className='nav-item' tabIndex="2" onClick={()=>handleRoute("wish")}>
                        <IoMdHeartEmpty className='icon'/>
                        <p>Wishlists</p>
                    </div>
                    :
                    null
                }
                {
                    user?.role === "user"
                    ?
                    <div className='nav-item' tabIndex="3" onClick={()=>handleRoute("trip")}>
                        <FaAirbnb className='icon'/>
                        <p>Trips</p>
                    </div>
                    :
                    null
                }
                {
                    isAuthenticated 
                    ?
                    null
                    :
                    <div className='nav-item' tabIndex="4" onClick={()=>handleRoute("login")}>
                        <FiUser className='icon'/>
                        <p>Log in</p>
                    </div>
                }
                
                {
                    isAuthenticated
                    ?
                    <div className='nav-item' tabIndex="5" onClick={()=>handleRoute("profile")}>
                        <FiUser className='icon'/>
                        <p>Profile</p>
                    </div>
                    :
                    null
                }
                
            </div>
        </div>
        </Drawer>
    )
}

export default MobileDrawer