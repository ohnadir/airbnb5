import "./Navbar.scss"
import logo from "../../assets/logo.png";
import { BiMenu, BiSearch } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from "react";
import { message, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import AuthenticationModal from "../AuthenticationModal/AuthenticationModal";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/actions/user"
import MobileNavbar from "./MobileNavbar";
import MobileBottomNav from "./MobileBottomNav";
import FloatNavContent from "./FloatNavContent";
const Navbar = ({authModal, setAuthModal}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  // const [authModal, setAuthModal] = useState(false);
  const [click, setClick] = useState('')
  const dispatch= useDispatch();
  const navigate= useNavigate()
  const handleDropDown = () =>{
    setAuthModal(true)
    setDropdown(false)
  }
  const handleLogOut=()=>{
    messageApi.success("Logout Successful")
    dispatch(logout())
  }
  const handleOptions=(e)=>{
    if(e === "anywhere"){
      setOpen(true)
      setClick("destination")
    }
    if(e === "anyweek"){
      setOpen(true)
      setClick("date")
    }
    if(e === "addguests"){
      setOpen(true)
      setClick("options")
    }
}
  return (
    <>
      {contextHolder}
      <div className='navbar'>
        <div className='relative navbar-container'>
          {/* desktop navbar */}
          <div className='hidden md:block desktop-navbar-container'>
            <div className='desktop-navbar-content'>
              <div className='brand-logo'>
                <img className="cursor-pointer" onClick={()=>navigate('/')} src={logo} alt="" />
              </div>
              <div>
                {
                    open ? <div className='little-search-label pb-[7px]'>
                      <div className="activeItem active-search-tab">Stays</div>
                      <div className="active search-tab">Experiences</div>
                      <div className="active search-tab">Online Experiences</div>
                    </div> 
                    : 
                    <div className="search-label pb-[7px]">
                      <div className='flex items-center gap-4 text-[14px]'>
                        <div onClick={()=> handleOptions('anywhere')}>Anywhere</div>
                        <div className="search-option-divider"></div>
                        <div onClick={()=>handleOptions("anyweek")}>Any week</div>
                        <div className="search-option-divider"></div>
                        <div onClick={()=>handleOptions("addguests")} className="text-[#717171]">Add guest</div>
                        <div tabIndex="1" className="search-btn" onClick={()=>setOpen(!open)}>
                          <BiSearch className="search-icon" />
                        </div>
                      </div>
                    </div>
                  }
              </div>
              <div className='profile-menu-container' tabIndex="1">
                <div className="profile-menu"  onClick={()=>setDropdown(!dropdown)}>
                  <BiMenu className='cursor-pointer text-2xl '/>
                  <span >
                    <FaUserCircle size={30} />
                  </span>
                </div>

                {/* dropdown option */}
                {/* {
                  dropdown && <div className="profile-dropdown">
                    <ul>
                        {
                          isAuthenticated 
                          ? <li className="cursor-name">{user?.firstName} {user?.lastName}</li> 
                          :
                          <li className='hidden'></li>
                        }
                        {
                          isAuthenticated 
                          ? <li className='hidden'></li>
                          :
                          <li onClick={handleDropDown}>Login OR Sign up </li>
                        }
                        {
                          isAuthenticated 
                          ?  <li onClick={()=>navigate('/dashboard')}>Dashboard</li>
                          :
                          <li className='hidden'></li>
                        }
                        {
                          isAuthenticated 
                          ?  <li  >Your Booking</li>
                          :
                          <li className='hidden'></li>
                        }
                      </ul>
                    <div className='profile-dropdown-divider'></div>
                    <ul>
                      <li>Airbnb your home</li>
                      <li>Help</li>
                      {
                        isAuthenticated 
                        ? <li onClick={handleLogOut}>Logout</li> 
                        :
                        <li className='hidden'></li>
                      }
                    </ul>
                  </div>
                } */}
                <div className="profile-dropdown">
                  <ul>
                    {
                      isAuthenticated 
                      ? <li className="cursor-name">{user?.firstName} {user?.lastName}</li> 
                      :
                      <li className='hidden'></li>
                    }
                    {
                      isAuthenticated 
                      ? <li className='hidden'></li>
                      :
                      <li onClick={handleDropDown}>Login OR Sign up </li>
                    }
                    {
                      isAuthenticated 
                      ?  <li onClick={()=>navigate('/dashboard')}>Dashboard</li>
                      :
                      <li className='hidden'></li>
                    }
                    {
                      isAuthenticated 
                      ?  <li  >Your Booking</li>
                      :
                      <li className='hidden'></li>
                    }
                  </ul>
                  <div className='profile-dropdown-divider'></div>
                  <ul>
                    <li>Airbnb your home</li>
                    <li>Help</li>
                    {
                      isAuthenticated 
                      ? <li onClick={handleLogOut}>Logout</li> 
                      :
                      <li className='hidden'></li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {
            authModal && <Modal
            centered
            style ={{borderRadius:"15px", overflow:"auto"}}
            open={authModal}
            width={570}
            closable={false}
            footer={false}
            className={{borderRadius:"30px"}}
            bodyStyle={{margin:"0", border:"none", padding:0  }}
          >
            <div className='p-6'>
              <AuthenticationModal setAuthModal={setAuthModal}/> 
            </div>
            </Modal>
          }
        </div>
        <MobileNavbar/>
        <MobileBottomNav/>
        {
          open && 
          <div data-aos="fade-down" className='hidden md:block'>
            <FloatNavContent  open={open} setOpen={setOpen} click={click} setClick={setClick}/>
          </div>
        }
      </div>
    </>
  )
}

export default Navbar