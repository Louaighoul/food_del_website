import React, { useState } from 'react'
import './nav_bar.css'
import { assets } from '../../assets/assets'
import { Link, Links } from 'react-router-dom'

const nav_bar = ({setshowlogin}) => {
    const[menu,setmenu]=useState("home");
  return (
    <div className="nav-bar">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="logo" />
        </Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setmenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>

        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=""  />
            <div className="navbar-search-icon">
               <Link to="/cart" > 
               <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
               </Link>
            </div>
            <button onClick={()=>setshowlogin(true)} className='navbar-button'>sign in</button>

        </div>
      
    </div>
  )
}

export default nav_bar
