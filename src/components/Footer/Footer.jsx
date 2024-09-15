import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.track} alt="" className='track' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat mollitia hic quibusdam delectus nulla est consequatur reprehenderit, ut neque animi ab eligendi ad repudiandae nisi tenetur inventore? Animi, explicabo.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon}alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
         

            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>contact@foodtrack.com</li>
                        <li>234-567-7450</li>
                    </ul>
            </div>
       
        </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 Foodtrack.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
