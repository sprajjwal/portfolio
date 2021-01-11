import React from 'react';
import './About.css'

import { Container } from 'react-bootstrap'
const ME = require("../static/me.svg")

function About(props) {

  return (
    <Container id="about">
      <img src={ME}/>
    </Container>
  )
}

export default About