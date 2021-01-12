import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import './Experience.css'

let data = require ('./exp.json');
let EXP = require('../static/exp.svg')

const Experience = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip id="flip-card" isFlipped={isFlipped} flipDirection="vertical" infinite="true">
      <div id="exp-front" className="edu-box"> 
        <img src={EXP} />
        <button onClick={() => setIsFlipped(true)}>Click to flip</button>
      </div>
      <div id="exp-back" className="edu-box">b
        <button onClick={() => setIsFlipped(false)}>Click to flip</button>
      </div>
    </ReactCardFlip>
  )
}

export default Experience