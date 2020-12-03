import React from 'react';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';




const LandingPage = (props) => {

    return (
       
            <div style={{ padding:"20px"}}>
                <div className="row" style={{width:"100%", display:"flex", justifyContent:"center", marginLeft:"0", marginBottom:"50px" }}>Welcome</div>
                <LoginForm className="col" setCookieApp={props.setCookieApp} handleLogin={props.handleLogin}/>
                <SignupForm className="col" handleSuccessfulAuth={props.handleSuccessfulAuth}/>
            </div>
        
    )
}

export default LandingPage
