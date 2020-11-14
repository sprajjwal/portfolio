import React from 'react';
import { Link } from 'react-scroll';

import './Navbar.css'

const  Navbar = ({ scrollToAbout }) => {
  return (
    <div id="navbar">
      <Link to="about" smooth="easeOutQuart" offset={-150} duration={1000}>About</Link>
      <Link to="projects" smooth="easeOutQuart" offset={-100} duration={1000}>Projects</Link>
      <Link to="contact" smooth="easeOutQuart" offset={-100} duration={1000}>Contact Me</Link>
      <Link to="footer" smooth="easeOutQuart" duration={1000}>Links</Link>
    </div>
  )
}

export default Navbar