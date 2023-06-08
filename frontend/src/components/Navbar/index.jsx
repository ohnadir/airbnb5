import "./Navbar.scss"
import logo from "../../assets/logo.png";
import { BiMenu, BiSearch } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from "react";
import { Modal } from 'antd';
import { useSelector } from 'react-redux'
import AuthenticationModal from "../AuthenticationModal/AuthenticationModal";
const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const handleDropDown = () =>{
    setAuthModal(true)
    setDropdown(false)
  }
  return (
    <div className='navbar'>
      <div className='relative navbar-container'>
        {/* desktop navbar */}
        <div className='hidden md:block desktop-navbar-container'>
          <div className='desktop-navbar-content'>
            <div className='brand-logo'>
              <img className="cursor-pointer"  src={logo} alt="" />
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
                      <div>Anywhere</div>
                      <div className="search-option-divider"></div>
                      <div >Any week</div>
                      <div className="search-option-divider"></div>
                      <div >Add guest</div>
                      <div className="search-btn" onClick={()=>setOpen(!open)}>
                        <BiSearch className="search-icon" />
                      </div>
                    </div>
                  </div>
                }
            </div>
            <div className='profile-menu-container pb-[7px] '>
              <div className="profile-menu" onClick={()=>setDropdown(!dropdown)}>
                <BiMenu className='cursor-pointer text-2xl '/>
                <span >
                  <FaUserCircle size={30} />
                </span>
              </div>

              {/* dropdown option */}
              {
                dropdown && <div className="profile-dropdown">
                  <ul>
                      {
                        isAuthenticated 
                        ? <li>{user?.firstName} {user?.lastName}</li> 
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
                        ?  <li  >Profile</li>
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
                  </ul>
                </div>
              }
              
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
    </div>
  )
}

export default Navbar