import { useEffect, useState } from 'react';
import './Navbar.scss'
import { FiUser } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaAirbnb } from 'react-icons/fa';
import { useSelector } from "react-redux"

const MobileBottomNav = () => {
    const [show, setShow] = useState(false);
    const { isAuthenticated } = useSelector(state=>state.auth)
    const controlNavbar = () => {
        // console.log(window.scrollY)
        console.log(document.documentElement.scrollHeight)
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop){
            // setShow(true);
        }
        if (scrollTop > 1) {
            setShow(true);
        }else{
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);
    return (
        <div className='mobile-bottom-nav' style={{height: show ? "65px" : 0}}>
            <div className="mobile-bottom-nav-container">
                <div className='nav-item' tabIndex="1">
                    <BiSearch className='icon icons'/>
                    <p>Explore</p>
                </div>
                {
                    isAuthenticated
                    ?
                    <div className='nav-item' tabIndex="2">
                        <IoMdHeartEmpty className='icon'/>
                        <p>Wishlists</p>
                    </div>
                    :
                    null
                }
                {
                    isAuthenticated
                    ?
                    <div className='nav-item' tabIndex="3">
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
                    <div className='nav-item' tabIndex="4">
                        <FiUser className='icon'/>
                        <p>Log in</p>
                    </div>
                }
                
                {
                    isAuthenticated
                    ?
                    <div className='nav-item' tabIndex="5">
                        <FiUser className='icon'/>
                        <p>Profile</p>
                    </div>
                    :
                    null
                }
                
            </div>
        </div>
    )
}

export default MobileBottomNav