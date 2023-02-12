import React from 'react'
import './footer.css'
import { FaMediumM , FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="footer">
        <div className="footer footer_container">
            <a href="#" className='footer_logo'>Shruti</a> 
            <ul className='permalinks'>
                    <li><a href = '#'>Home</a></li>
                    <li><a href = '#projects'>Projects</a></li>
                    <li><a href = 'mailto:shrutibendale@gmail.com'>Contact Me</a></li>
            </ul>

            <div className="footer_socials">
                    <a href="https://github.com/ShrutiBendale" target="_blank"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/shrutibendale" target="_blank"><FaLinkedin/></a>
                    <a href="https://medium.com/@shrutibendale" target="_blank"><FaMediumM/></a>
            </div>
        </div>

    </section>

  )
}

export default Footer