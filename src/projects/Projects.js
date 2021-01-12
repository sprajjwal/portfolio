import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

import './project.css'
const PRO = require('../static/projects.svg')
let data = require ('./pro.json');

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip id="edu" isFlipped={isFlipped} flipDirection="vertical" infinite="true" >
      <div className="edu-box edu-front"> 
        <img src={PRO} />
        <Button variant="secondary" onClick={() => setIsFlipped(true)}>Click to see my Projects</Button>
      </div>
      <div className="edu-box edu-back">
        <Accordion >
          {data.map((item, i) => {
            return (
              <Card key={i}>
                <Accordion.Toggle style={styles.proCardHead} as={Card.Header} eventKey={i+1}>
                  {item.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={i+1}>
                  <Card.Body style={styles.proCardBody}>
                    {item.about}
                    <div>
                      {item.github === "" ?
                      <button type="button" className="btn btn-secondary" disabled>Github</button> :
                      <a className="btn btn-dark text-white" href={item.github} role="button">Github</a>
                      }
                      {item.live === "" ?
                      <button type="button" className="btn btn-secondary" disabled>Live</button> :
                      <a className="btn btn-dark text-white" href={item.live} role="button">Live</a>
                      }
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          })}
        </Accordion>
        <button onClick={() => setIsFlipped(false)}>Click to flip</button>
      </div>
    </ReactCardFlip>
  )
}

const styles = {
  proCardBody: {
    backgroundColor: "#eda4bb"
  },
  proCardHead: {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: '400',
  }
}

export default Projects