import React, { useState } from "react";

import './contact.css';
import { Modal, Button, Form } from 'react-bootstrap';

const CON = require("../static/contact.svg")

function MyVerticallyCenteredModal(props) {
  const [status, setStatus] = useState("");

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Send a Message to me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div id="contact">
        <Form           
          onSubmit={submitForm}
          action="https://formspree.io/f/meqpzkjg"
          method="POST"
          id="contact-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" />
          </Form.Group>
          {status === "SUCCESS" ? <small>Thanks!</small> : <><Button type="submit" variant="secondary">Submit</Button> <br></br> </>}
          {status === "ERROR" && <small>Ooops! There was an error.</small>}
        </Form>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={() => {
          setStatus("")
          props.onHide()
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Contact() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div id="con">
      <img src={CON} alt="CONTACT ME" />
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Click here to send me a message.
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}








