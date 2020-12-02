import React from 'react';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';




const LandingPage = (props) => {

    return (
        <div>
            <div style={{padding:"20px"}}>
                <strong>WELCOME</strong>
                <LoginForm setCookieApp={props.setCookieApp} handleLogin={props.handleLogin}/>
                <SignupForm handleSuccessfulAuth={props.handleSuccessfulAuth}/>
            </div>
        </div>
    )
}

export default LandingPage
