import React from 'react'
import NavBar from './components/nav_bar/nav_bar.jsx'
import {  Route,Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import PlaceOrder from './pages/placeorder/placeorder.jsx'
import Footer from './components/Footer/Footer.jsx' 
import { useState } from 'react'
import LoginPopup from './components/Loginpopup/loginpopup.jsx'

const App = () => {
  const [showlogin,setshowlogin] = useState(false);
  return (
    <>
    {showlogin?<LoginPopup setshowlogin={setshowlogin} />:<></>}
     <div className="App">
      <NavBar setshowlogin={setshowlogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        </Routes>
    
    </div>
      <Footer />
    </>

  )}


export default App