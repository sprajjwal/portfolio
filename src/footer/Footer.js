import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <p className="footer-text">&copy; Copyright 2020, Shashwat Prajjwal. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/sprajjwal" className="m-2" target="blank">
          <FontAwesomeIcon icon={faGithubAlt} color="white" size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/shashwat-prajjwal/" className="m-2" target="blank">
          <FontAwesomeIcon icon={faLinkedinIn} color="white" size="2x" />
        </a>
      </div>
    </div>
  )
}

export default Footer