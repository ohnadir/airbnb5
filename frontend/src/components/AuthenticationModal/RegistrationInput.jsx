import React, { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom"
import { BiChevronLeft } from 'react-icons/bi';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { register } from "../Redux/actions/user"

const RegistrationInput = ({input, passInput, setAuthModal, setIsValid}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [auth, setAuth] = useState("");
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    const {  user, error } = useSelector(state => state.auth);
    console.log(user);
        
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const validUser = {
        ...auth,
        email: input,
        password: passInput
    }
    const OnSubmit = async(e) => {
        e.preventDefault()
        if(validUser){
            dispatch(register(validUser))
        }
    }
    useEffect(()=>{
        if(user?.email) {
            messageApi.info("Registration successfully");
            setTimeout(() => {
                setAuthModal(false)
                navigate("/")
            }, 1000);
        }
        if(error === "Phone Number already taken" || error === "Error. Try again"){
            messageApi.error(error);
        }
    },[error, user])
    return (
        <>
        {contextHolder}
        <div className='mb-5 registration'>
            <div className='header-container mb-[25px]'>
                <div className='flex items-center pb-[20px]'>
                    <BiChevronLeft onClick={() => setIsValid(false)} className='w-7 h-7 border rounded-full hover:bg-gray-100 p-1 cursor-pointer'/>
                    <p className='font-bold  mx-auto'>Finish signing up</p>
                </div>
            </div>
            <form action="" >
                <div className='grid grid-cols-1 gap-5'>

                    {/* Name Section */}

                    <section className='name-container'>
                        <div className='rounded-[8px]' style={{border : "1px solid #ddd"}}>
                            <div className='input-container' style={{borderBottom : "1px solid #ddd"}}>
                            <input onChange={handleChange} name='firstName'  type="text" placeholder='First Name' />
                            </div>
                            <div className='input-container'>
                            <input onChange={handleChange} name='lastName'  type="text" placeholder='Last Name' />
                            </div>
                        </div>
                        <p className='text-[#484848] text-[12px] mt-[2px]'>Make sure it matches the name of your government ID.</p>
                    </section>

                    {/* BirthDate  */}

                    <section className="birthdate-container">
                        <div className='input-container rounded-[8px]'  style={{border : "1px solid #ddd"}}>
                            <input onChange={handleChange} type="text" name='birth'   placeholder='Birthdate' />
                        </div>
                        <p className='text-[#484848] text-[12px] mt-[5px] '>To sign up, you need to be at least 18. Your birthday won't be share with other people who use airbnb.</p>
                    </section>

                    {/* Phone Number Section */}

                    <section className='phone-number'>
                        <div className='input-container rounded-[8px]' style={{border : "1px solid #ddd"}}>
                            <input onChange={handleChange} type="text" name='phone'  placeholder='Phone Number' />
                        </div>
                        <p className='text-[#484848] text-[12px] mt-[2px]'>We'll send message trip confirmation and receipts.</p>
                    </section>

                    {/* Button */}
                    <div className=''>
                        <button onClick={OnSubmit}  type="submit" className='registration-btn'>Agree and Continue</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default RegistrationInput