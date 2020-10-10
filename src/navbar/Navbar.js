import React from 'react';
import { Link } from 'react-scroll';

import './Navbar.css'

const  Navbar = ({ scrollToAbout }) => {
  return (
    <div id="navbar">
      <Link to="about" smooth="easeOutQuart" duration={1000}>About</Link>
      <Link to="footer" smooth="easeOutQuart" duration={1000}>Footer</Link>
    </div>
  )
}

export default Navbar