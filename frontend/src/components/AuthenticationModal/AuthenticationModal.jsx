import { useState } from 'react'
import "./AuthenticationModal.scss"
import { RiCloseFill } from 'react-icons/ri';
import SocialAuth from './SocialAuth';
const AuthenticationModal = ({ setAuthModal }) => {
    const [passInput, setPassInput] = useState("");
    const [password, setPassword] = useState("")
    const [input, setInput] = useState("");
    const handleSubmit = () => {
        if(input){
            setPassword(true)
        }
        
    }
    return (
        <div className='authentication-container'>
            <section className="login-container">
                <div className='header-container'>
                    <div className='close-icon'>
                        <RiCloseFill onClick={() => setAuthModal(false)} className='icon'/>
                    </div>
                    <p className='m-0 mx-auto font-bold'>Log in or sign up</p>
                </div>
                <p className='font-semibold text-[17px] mb-3'>Welcome to Airbnb</p>
                <div className="email-pass-container">
                    {
                        password 
                        ? 
                        <div className="">
                            <label className='relative cursor-pointer'>
                                <input value={passInput} type="password" onChange={(e)=>setPassInput(e.target.value)} placeholder="xxxx xxxx xxx" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                <span className='text-opacity-80  absolute left-[21px] top-[30%] text-black translate-y-[-50%]  transition duration-200 input-password'>Password</span>
                            </label>
                        </div>
                        :
                        <div className="">
                            <label className='relative cursor-pointer'>
                                <input type="email" onChange={(e)=>setInput(e.target.value)} placeholder="xxxx xxxx xxx" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                <span className='text-opacity-80  absolute left-[20px] top-[30%] text-black translate-y-[-50%]  transition duration-200 input-email'>Email</span>
                            </label>
                        </div>
                    }
                    
                </div>
                <span className='text-xs'>We'll call or text you to confirm your number. Standard message and data rates apply. <span className='underline font-bold'>Privacy Policy</span></span>    
                <div className=" mt-4 flex">
                    <button onClick={handleSubmit} className="login-btn">Continue</button>
                </div>
                <section className="">
                    <div className='flex items-center gap-6'>
                        <div className="w-full h-[1px] bg-[#dddddd] my-[25px]"></div>
                        <div>or</div>
                        <div className="w-full h-[1px] bg-[#dddddd] my-[25px]"></div>
                    </div>
                </section>
                <SocialAuth/>
            </section>
        </div>
    )
}

export default AuthenticationModal