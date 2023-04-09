import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">KonaIT</h3>
                <span className="loginDesc">Connect with your community, share your interests, and make meaningful connections with KonaIT Social - the app that brings people together!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' type="Email" className="loginInput" />
                    <input placeholder='Password' type="Password" className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className='LoginForgot'> Forgot Password?</span>
                    <button className="loginRegisterButton">Create an Account</button>
                </div>
            </div>
        </div>

    </div>
  )
}
