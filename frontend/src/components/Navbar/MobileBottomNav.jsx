import { useEffect, useState } from 'react';
import './Navbar.scss'
import { FiUser } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { IoMdHeartEmpty } from 'react-icons/io';

const MobileBottomNav = () => {
    const [show, setShow] = useState(false);
    const controlNavbar = () => {
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
                <div className='nav-item'>
                    <BiSearch className='icon'/>
                    <p>Explore</p>
                </div>
                <div className='nav-item'>
                    <IoMdHeartEmpty className='icon'/>
                    <p>Wishlists</p>
                </div>
                <div className='nav-item'>
                    <FiUser className='icon'/>
                    <p>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default MobileBottomNav