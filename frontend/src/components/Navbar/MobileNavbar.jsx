import './Navbar.scss'
import { BiSearch } from 'react-icons/bi'
import { CgOptions } from 'react-icons/cg'

const MobileNavbar = () => {
    return (
        <div className='block md:hidden mobile-navbar-container px-5'>
            <div className='mobile-navbar-content'>
                <div className='mobile-search-label'>
                    <BiSearch className='text-xl'/>
                    <div className='py-2'>
                        <h1 className='m-0 text-[13px] font-semibold'>Anywhere</h1>
                        <ul className="custom-search-label">
                            <span>Any week</span>
                            <li>Add guests</li>
                        </ul>
                    </div>
                </div>
                <CgOptions className='filter-icon' />
            </div>
        </div>
    )
}

export default MobileNavbar