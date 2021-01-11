import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Socials = () => {
  return (
    <div id="footer">
      <p className="footer-text">&copy; Copyright 2020, Shashwat Prajjwal. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/sprajjwal" target="blank">
          <FontAwesomeIcon icon={faGithubAlt} color="white" size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/shashwat-prajjwal/" target="blank">
          <FontAwesomeIcon icon={faLinkedinIn} color="white" size="2x" />
        </a>
      </div>
    </div>
  )
}

export default Socials