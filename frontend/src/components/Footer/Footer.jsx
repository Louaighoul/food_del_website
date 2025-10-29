import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets.js'

const Footer = () => {
return (
    <div className="footer" id='footer'>
            <div className='footer-content'>
                    <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
                    <div className="footer-content-icons">
                        <a href="https://www.facebook.com/louai.ghouli" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook_icon} alt="Facebook"  />
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter_icon} alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/louai-ghouli-87b25a326/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                                <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+213-655-301-902</li>
                            <li>ghoulilouai@gmail.com</li>
                        </ul>
                    </div>
            </div>
            <hr />
            <p className="footer-copyright">© 2025 Tomato. All rights reserved.</p>
    </div>
)
}



export default Footer