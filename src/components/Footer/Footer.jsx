import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo }alt="" /> 
        </div>
        <div className="fiiter-content-right">

        </div>
        <div className="footer-content-center">

        </div>
      </div>
      
    </div>
  )
}

export default Footer
