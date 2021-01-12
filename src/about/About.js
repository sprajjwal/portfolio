import React from 'react';
import './About.css'

import { Image } from 'react-bootstrap'
const ME = require("../static/me.svg")

function About(props) {

  return (
    <div id="about">
      <Image src={ME} className="img p-2" roundedCircle/>
    </div>
  )
}

export default About