import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';




const LandingPage = (props) => {

    const handleSuccessfulAuth = e => {
        e.preventDefault();
    }

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
