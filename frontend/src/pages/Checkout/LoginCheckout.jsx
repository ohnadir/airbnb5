import { useEffect, useState } from "react";
import "./Checkout.scss"
import RegisterCheckout from "./RegisterCheckout";
import { message } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../Redux/actions/user";

const AuthCheckout = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { user, error } = useSelector(state => state.auth)
    const [input, setInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [password, setPassword] = useState("")
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();

    const google=()=> {
        window.open("http://localhost:5001/auth/google",  "_blank", 
        " width=500,height=500");
    };
    const github = () => {
        window.open("http://localhost:5001/auth/github",  "_blank", 
        " width=500,height=500");
    };
    const facebook = () => {
        window.open("http://localhost:5001/auth/facebook", "_blank", 
        " width=500,height=500");
    };

    // check valid email or not 
    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };
    
    const auth  = {
        email: input,
        password: passInput
    }
    const handleSubmit = () => {
        const result = validateEmail(input)
        if(result){
            setPassword(true)
        }
        else{
            messageApi.error("Invalid Email");
        }
        if(passInput){
            dispatch(login(auth))
        }
    }
    useEffect(()=>{
        if (user?.email) {
            messageApi.success("login successfully");
        }
        if(error === "Incorrect credential"){
            messageApi.warning("Incorrect credential");
        }
        if(error === "user not found"){
            setIsValid(true);
        }
    },[error, user])
    return (
        <>
            {contextHolder}
            <div className='auth-checkout'>
                {
                    isValid 
                    ?
                    <RegisterCheckout input={input} passInput={passInput}/>
                    :
                    <div>
                        <section className="">
                            <h1 className='text-2xl mb-5'>Log in or sign up to book</h1>
                            <div className="auth-container">
                                {
                                    password 
                                    ? 
                                    <div className="input-container" >
                                        <div className="">
                                            <label className='relative cursor-pointer'>
                                                <input value={passInput} type="password" onChange={(e)=>setPassInput(e.target.value)} placeholder="xxxx xxxx xxx" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                                <span className='text-opacity-80  absolute left-[21px] top-[30%] text-black translate-y-[-50%]  transition duration-200 input-password'>Password</span>
                                            </label>
                                        </div>
                                    </div>
                                    :
                                    <div className="input-container" >
                                        <div className="">
                                            <label className='relative cursor-pointer'>
                                                <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder="xxxx xxxx xxx" className='pt-5 pb-3 w-full px-[14px] text-[14px]  border-none rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                                                <span className='text-opacity-80  absolute left-[20px] top-[30%] text-black translate-y-[-50%]  transition duration-200 input-email'>Email</span>
                                            </label>
                                        </div>
                                    </div>
                                } 
                            </div>
                            <span className='text-xs'>We&apos;ll call or text you to confirm your number. Standard message and data rates apply. <span className='underline font-bold'>Privacy Policy</span></span>    
                        </section>
                        
                        {/* login button start */}
                        <div className="btn mt-4">
                            <button disabled={!input} onClick={handleSubmit} className="auth--btn">Continue</button>
                        </div>

                        {/* divider start */}
                        <section className="my-5">
                            <div className='flex items-center gap-6'>
                                <div className="card-divider"></div>
                                <div>or</div>
                                <div className="card-divider"></div>
                            </div>
                        </section>

                        {/* social icon section  start*/}
                        <section className="social-auth">
                            <div className='social-icon-container'>
                                <div onClick={facebook}  className="social-icon">
                                    <img className="icon" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711218/facebook_iukumb.png" alt="" />
                                </div>
                                <div onClick={google} className="social-icon">
                                    <img  className="icon" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711180/search_nlfgqn.png" alt="" />
                                </div>
                                <div onClick={github} className="social-icon">
                                    <img className="icon" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666717428/apple_ouqww9.png" alt="" />
                                </div>
                            </div>
                            <div className="social-icon full-icon">
                                <img className="icon mx-auto" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666717428/email_i5xejg.png" alt="" />
                                <p className='icon-text m-0'>Continue with email</p>
                            </div>
                        </section>
                    </div>
                }
            </div>
        </>
    )
}

export default AuthCheckout