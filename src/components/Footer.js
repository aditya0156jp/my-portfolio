

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

<div className="left">

<div className="location">
   
    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
    <div>
        <p> Begusarai Bihar</p>
        <p> India </p>
    </div>
</div>
<div className="Phone">
    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
      +918651xxxx12 </h4>
      
      </div>
<div className="Email">
    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: " 2rem"}}/>
     kmraditya029@gmail.com </h4>
      
</div>
</div>
<div className="right">
<h4>About Myself</h4>
<p>I am Aditya Kumar, a B.Tech student specializing in biotechnology and medical engineering at NIT Rourkela. I have a keen interest in technology, relish the opportunity to acquire new knowledge, and enjoy exploring both my surroundings and the latest advancements in technology.
</p>

<div className="social">

<FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
<FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
   <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
    
</div>


</div>

        </div>
    </div>
  )
}

export default Footer
