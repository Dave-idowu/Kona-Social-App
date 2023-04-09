import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">KonaIT</h3>
                <span className="loginDesc">Connect with your community, share your interests, and make meaningful connections with KonaIT Social - the app that brings people together!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='First Name' type="text" className="loginInput"/>
                    <input placeholder='Last Name' type="text" className="loginInput"/>
                    <input placeholder='Email' type="Email" className="loginInput"/>
                    <input placeholder='Password' type="Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Sign In</button>
                </div>
            </div>
        </div>

    </div>
  )
}
