import './MobileProfile.scss'
import { FaAirbnb } from  "react-icons/fa"
import { BiChevronRight, BiSupport } from  "react-icons/bi"
import { BsQuestionCircle } from  "react-icons/bs"
import { TbUserCircle } from  "react-icons/tb"
// import { IoSettingsOutline } from  "react-icons/io"
import { MdOutlineHealthAndSafety } from  "react-icons/md"

const MobileProfile = () => {
    return (
        <div className='mobile-profile'>
            <div className="mobile-profile-container">
                <h1 className='profile-heading'>Profile</h1>
                <section className="user-info">
                    <div className="user-img">N</div>
                    <div className='navigate'>
                        <div>
                            <h1>Nadir</h1>
                            <p>Show Profile</p>
                        </div>
                        <BiChevronRight size={28}/>
                    </div>
                </section>
                <div className="divider my-6"></div>

                <section className="host-home">
                    <div>
                        <h1>Airbnb your place</h1>
                        <p>It&apos; simple to get set up and start earning</p>
                    </div>
                    <div className="img">
                        <img src="https://a0.muscache.com/pictures/b0021c55-05a2-4449-998a-5593567220f7.jpg" alt="home" />
                    </div>
                </section>

                <section className="personal-info mb-5">
                    <div className='flex items-center gap-3'>
                        <TbUserCircle size={24} />
                        <p>Personal info</p>
                    </div>
                    <BiChevronRight size={28} />
                </section>
                <section className="account-info">
                    <div className='flex items-center gap-3'>
                        <TbUserCircle size={24} />
                        <p>Account</p>
                    </div>
                    <BiChevronRight size={28} />
                </section>

                <div className="divider my-5"></div>
                <section className="host-a-home">
                    <h1>Hosting</h1>
                    <div className="host-a-home-container">
                        <div className='flex items-center gap-3'>
                            <TbUserCircle size={24} />
                            <p>Host a home</p>
                        </div>
                        <BiChevronRight  size={28} />
                    </div>
                </section>

                <div className="divider my-5"></div>
                <section className="referral">
                    <h1>Referrals & credits</h1>
                    <div className="referral-container ">
                        <div className='flex items-center gap-3'>
                            <TbUserCircle size={24} />
                            <p>Refer a host</p>
                        </div>
                        <BiChevronRight size={28} />
                    </div>
                </section>

                <div className="divider my-8"></div>
                <section className="support">
                    <h1>Support</h1>
                    <div className="support-container">
                        <div className="support-item">
                            <div className='flex items-center gap-5'>
                                <BsQuestionCircle size={24} />
                                <p>Visit the Help Center</p>
                            </div>
                            <BiChevronRight size={28} />
                        </div>
                        <div className="support-item">
                            <div className='flex items-center gap-5'>
                                <MdOutlineHealthAndSafety size={24} />
                                <p>Get help with a safety issue</p>
                            </div>
                            <BiChevronRight size={28}/>
                        </div>
                        <div className="support-item">
                            <div className='flex items-center gap-5'>
                                <BiSupport size={24} />
                                <p>Report a neighborhood concern</p>
                            </div>
                            <BiChevronRight size={28}/>
                        </div>
                        <div className="support-item">
                            <div className='flex items-center gap-5'>
                                <FaAirbnb size={24} />
                                <p>How Airbnb works</p>
                            </div>
                            <BiChevronRight size={28}/>
                        </div>
                    </div>
                </section>

                <div className="divider my-8"></div>
                <button className='logout-btn'>Log out</button>

                <section className="mobile-footer">
                    <ul>
                        <p>Help & support</p>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Your Privacy Choice</li>
                    </ul>
                    <p className='copy-right'>&#169; 2023  Airbnb, Inc. All rights reserved.</p>
                </section>
            </div>
        </div>
    )
}

export default MobileProfile