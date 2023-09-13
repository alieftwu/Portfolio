import "./FooterStyles.css"

import React from 'react'
import {FaHome, FaMailBulk, FaLinkedin} from "react-icons/fa"; /*adds space for icon*/

const Footer = () => {
  return (
    <div className="footer">
        <div className ="footer-container">
            <div className ="left">
                <div className ="location">
                 <FaHome size={20} style = {{color: "#fff", marginRight: "2rem"}}/>   
                 <div>
                    <p> Starkville, Mississippi </p>
                 </div>
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style = {{color: "#fff", marginRight: "2rem"}}/> 
                    alief.twumasi@gmail.com</h4>
               
                
            </div>

            <div className ="right"></div>
            <h4> About me </h4>
            <p> I am currently a Computer Science major attending Mississippi State University. I have experience coding in C++, C, Javascript, and Python. </p>
            <div className ="social">
            <h4><FaLinkedin size={30} style = {{color: "#fff", marginRight: "2rem"}}/>
            Alief Twumasi</h4>  
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer