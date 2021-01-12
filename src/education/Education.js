import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const EDU = require('../static/education.svg');
require("./Education.css")

const Education = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip id="flip-card" isFlipped={isFlipped} flipDirection="vertical" infinite="true" >
      <div className="edu-box edu-front flip-card"> 
        <img alt="EDUCATION" src={EDU} />
        <button onClick={() => setIsFlipped(true)}>Click to flip</button>
      </div>
      <div className="edu-box edu-back">
        <div>
          <h3 className="fs-1" styles="color: #000;"><FontAwesomeIcon icon={faUniversity} color="#e7b0c1" />   Domincan University of California</h3>
          <p className="text-break fs-2 my-fc"><span className="fw-bold fs-1">Graduation Date: </span>August 2021</p>
        </div>
        <Button variant="secondary" onClick={() => setIsFlipped(false)}>Click to flip</Button>
      </div>
    </ReactCardFlip>
  )
}

export default Education