import './Footer.scss'
import { IoIosArrowUp } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className="footer hidden md:block">
            <div className="footer-container">
                <div className="flex text-sm  items-center justify-between">
                    <div className="flex gap-5 items-center ">
                        <p className='mb-0 pb-0 '>© 2022 Airbnb, Inc.</p>
                        <ul className="flex m-0 gap-5">
                            <li>Terms</li>
                            <li>Sitemap</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-5 text-sm font-semibold">
                        <div className='flex cursor-pointer items-center gap-2'>
                            <TbWorld />  
                            <div className="footerOption">
                                <span >English</span>
                                <span>(US)</span>
                            </div>
                        </div>
                        <div className='cursor-pointer flex gap-1'>
                            <span className='text-center'>$ </span> 
                            <div className="footerOption">
                                <span className='text-center'>USD</span>
                            </div>
                        </div>
                        <div  className='flex gap-2 cursor-pointer items-center'>
                            <div className="footerOption">
                                <span >Support & resources</span> 
                            </div>
                            <IoIosArrowUp  className="arrowIcon"/>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer