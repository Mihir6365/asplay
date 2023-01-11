import 'animate.css';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');


  const handleSubmit = async (e) => {
    e.preventDefault();

    var raw = {
      "name": (document.getElementById('fname').value + " " + document.getElementById('lname').value),
      "email": document.getElementById('email').value,
      "phone": document.getElementById('phone').value,
      "message": document.getElementById('message').value
    };

    setButtonText("Sending...");

    let response = await fetch("https://dead-pear-lion-shoe.cyclic.app/contact", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(raw)
    }).catch((e) => {
      console.log(e)
    })


    let result = await response.json();
    if (result.status) {
      setButtonText("Success!!");
      setTimeout(() => {
        setButtonText("Send");
      }, 3000);

    } else {
      setButtonText("Failed. Try again?");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name*" id='fname' required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name" id='lname' />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address*" id='email' required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." id='phone' />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message*" id='message' required></textarea>
                        <button id="contact-submit" type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
