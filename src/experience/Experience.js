import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let EXP = require ('./exp.json');

const Experience = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(EXP)
  return (
    <ReactCardFlip id="footer" isFlipped={isFlipped} flipDirection="horizontal" infinite="true">
      <div> a
      <button onClick={() => setIsFlipped(true)}>Click to flip</button>
      </div>
      <div>b
      <button onClick={() => setIsFlipped(false)}>Click to flip</button>
      </div>
    </ReactCardFlip>
  )
}

export default Experience