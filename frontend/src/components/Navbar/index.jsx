import "./Navbar.scss"
import logo from "../../assets/logo.png";
import { BiMenu, BiSearch } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
  const Navbar = () => {
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
              <div className="search-label pb-[7px]">
                <div className='flex items-center gap-4 text-[14px]'>
                  <div>Anywhere</div>
                  <div className="search-option-divider"></div>
                  <div>Any week</div>
                  <div className="search-option-divider"></div>
                  <div >Add guest</div>
                  <div className="search-btn" >
                    <BiSearch className="search-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className='profile-menu-container pb-[7px] '>
              <div className="profile-menu" >
                <BiMenu className='cursor-pointer text-2xl '/>
                <span >
                  <FaUserCircle size={30} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar