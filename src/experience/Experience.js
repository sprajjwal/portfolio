import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Button, Carousel } from 'react-bootstrap';
import './Experience.css'

let data = require ('./exp.json');
let EXP = require('../static/exp.svg')

const Experience = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" infinite="true">
      <div id="exp-front" className="edu-box edu-front"> 
        <img src={EXP} alt="EXPERIENCES" />
        <Button variant="secondary" onClick={() => setIsFlipped(true)}>Click to see my Projects</Button>
      </div>
      <div className="edu-box edu-back p-1">
        <Carousel className="exp-car" nextIcon="" nextLabel="" prevIcon="" prevLabel="" >
          {data.map((item, i) => {
            return(
              <Carousel.Item key={i}>
                <h1>{item.pos}</h1>
                {/* <Carousel.Caption> */}
                <h2 style={{ display: "inline" }}>{item.company}   <h4>{item.time}</h4></h2>
                <ul>
                  {item.task.map((tasks, j) => {
                    return (
                      <li key={j}>{tasks}</li>
                    )
                  })}
                </ul>
                {/* </Carousel.Caption> */}
              </Carousel.Item>
            )
          })}
        </Carousel>
        <Button variant="secondary" size="sm" onClick={() => setIsFlipped(false)}>Back</Button>
      </div>
    </ReactCardFlip>
  )
}

export default Experience