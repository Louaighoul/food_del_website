import React from 'react'
import { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'

const loginPopup = ({ setshowlogin }) => {
  const [currstate, setcurrstate] = useState("login");
  return (
    <div className='login-popup'>


      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
          <h2>{currstate}</h2>
          
          <div className="login-popup-inputs">
            {currstate === "login" ? <></> : <input type="text" placeholder='Your name' required />}
            <input type="text" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
            <button>{currstate === "Sign Up" ? "Create account" : "Login"}</button>
          </div>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by continuing you agree to our terms and conditions</p>
        </div>
        {currstate === "login" ? <p>Create a new account? <span onClick={() => setcurrstate("Sign Up")}>Click here</span></p>
         :<p>Already have an account? <span onClick={()=>setcurrstate("login")}>Click here</span></p>}
        
        
      </form>


    </div>
  )
}

export default loginPopup
