import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebookF , FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="footer">
        <div className="containier footer footer_container">
            <a href="https://shrutiandskye.com/#" className='footer_logo'>Shruti</a> 
            <ul className='permalinks'>
                    <li><a href = 'https://shrutiandskye.com/#'>Home</a></li>
                    <li><a href = 'https://shrutiandskye.com/#projects'>Projects</a></li>
                    <li><a href = 'https://shrutiandskye.com/#contact'>Contact Me</a></li>
            </ul>

            <div className="footer_socials">
                    <a href="https://github.com/ShrutiBendale"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/shrutibendale"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/shrutibendale/"><FaInstagram/></a>
                    <a href="https://www.facebook.com/shruti.bendale.3/"><FaFacebookF/></a>
                    
            </div>
        </div>

    </section>

  )
}

export default Footer