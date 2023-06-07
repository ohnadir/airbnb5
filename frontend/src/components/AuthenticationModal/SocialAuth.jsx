

const SocialAuth = () => {
    const google=()=> {
        window.open("http://localhost:5000/api/v1/passport/google",  "_self", 
        " width=500,height=500");
    };
    const github = () => {
        window.open("http://localhost:5000/api/v1/passport/github",  "_self", 
        " width=500,height=500");
    };
    
    const facebook = () => {
        window.open("http://localhost:5000/api/v1/passport/facebook", "_blank", 
        " width=500,height=500");
    };
    return (
        <div>
            <section className="social-auth grid grid-cols-1 gap-5">
                <div onClick={facebook}  className="social-icon">
                    <img className="icons" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711218/facebook_iukumb.png" alt="" />
                    <h2 className='m-0'>Continue with Facebook</h2>
                </div>
                <div onClick={google} className="social-icon">
                    <img  className="icons" src="https://res.cloudinary.com/dcmvctoz3/image/upload/v1666711180/search_nlfgqn.png" alt="" />
                    <h2 className='m-0'>Continue with Google</h2>
                </div>
                <div onClick={github} className="social-icon">
                    <img className="icons" src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1680261025/github_s3mes2.png" alt="" />
                    <h2 className='m-0'>Continue with Github</h2>
                </div>
            </section>
        </div>
    )
}

export default SocialAuth