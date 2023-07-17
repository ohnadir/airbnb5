import { useEffect, useState } from 'react';
import './Checkout.scss'
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../Redux/actions/user"

const  RegisterCheckout = ({ input, passInput }) => {
    const {  user, error } = useSelector(state => state.auth);
    const [messageApi, contextHolder] = message.useMessage();
    const [auth, setAuth] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    const validUser = {
        ...auth,
        email: input,
        password: passInput
    }
    const OnSubmit=(e) => {
        e.preventDefault()
        if(validUser){
            dispatch(register(validUser))
        }
    }
    useEffect(()=>{
        if(user?.email) {
            messageApi.info("Registration successfully");
        }
        if(error === "Phone Number already taken" || error === "Error. Try again"){
            messageApi.error(error);
        }
    },[error, user])
    return (
        <>
            {contextHolder}
            <div className='mb-5 checkout-auth-registration'>
                <p className='font-bold mb-5 text-center'>Finish signing up</p>
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
                            <p className='text-[#484848] text-[12px] mt-[5px] '>To sign up, you need to be at least 18. Your birthday won&apos;t be share with other people who use airbnb.</p>
                        </section>

                        {/* Phone Number Section */}
                        <section className='phone-number'>
                            <div className='input-container rounded-[8px]' style={{border : "1px solid #ddd"}}>
                                <input onChange={handleChange} type="text" name='phone'  placeholder='Phone Number' />
                            </div>
                            <p className='text-[#484848] text-[12px] mt-[2px]'>We&apos;ll send message trip confirmation and receipts.</p>
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

export default RegisterCheckout