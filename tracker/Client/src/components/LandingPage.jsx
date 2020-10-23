import React from 'react'
// import LoginForm from './LoginForm'
import User from './User'

function LandingPage() {
    return (
        <div>
            <div style={{padding:"20px"}}>
                <strong>WELCOME</strong>
            </div>
            {/* <LoginForm/> */}
            <User/>
        </div>
    )
}

export default LandingPage
