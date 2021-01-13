import React from 'react';
import './About.css'

import { Image } from 'react-bootstrap'
const ME = require("../static/me.svg")

function About(props) {

  return (
    <div id="about">
      <Image src={ME} className="img-fluid" />
      <h3 className="my-fc">Shashwat Prajjwal (shaash)</h3>
      <div className="text-break" id="about-me" >
        <p>Shashwat is an aspiring Full Stack Developer who is also a fast learner. Effective at combining creativity and problem solving to 
        develop user friendly applications. Known among peers for strong wit, attention to detail and optimized design pattern suggestions 
        no matter the complexity of the project. He has a background in Full Stack Web Development with various projects built across
         different Javascript and Python frameworks.</p>
        <p>Check out my Resume <a href="https://docs.google.com/document/d/1-4k5LEx3QbglpQKnorsFxP2MZWM0GI32ECmBJMgnC7s/edit?usp=sharing" target="_blank">here</a></p>

        <h3 className="my-fc">Technical Skills:</h3>
        <p>Fluent: JS, React, React-Native, NodeJS, Express, Python, Flask, Heroku, Data structures and algorithms</p>
        <p>Familiar: NPM, Redux, Typescript, Web Sockets, C, C++, Unix, Django, Markdown, SASS, AWS, Lambda</p>


        <p>Interests:
        Web Development, Responsive Web Design, Functional programming, Product Development, Startups, entrepreneurship.</p>


        <p>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/shashwat-prajjwal/">https://www.linkedin.com/in/shashwat-prajjwal/</a></p>
        <p>Github: <a target="_blank" href=">https://github.com/sprajjwal">https://github.com/sprajjwal</a></p>
        <p>Medium: <a target="_blank" href=">https://medium.com/@shaash.prajjwal">https://medium.com/@shaash.prajjwal</a></p>
      </div>
    </div>
  )
}

export default About