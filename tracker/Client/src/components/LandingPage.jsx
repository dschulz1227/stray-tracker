import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function LandingPage() {
    return (
        <div>
            <div style={{padding:"20px"}}>
                <strong>WELCOME</strong>
            </div>
            <LoginForm/>
            <RegisterForm/>
        </div>
    )
}

export default LandingPage
