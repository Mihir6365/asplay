import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { ArrowRightCircle, HandIndex } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  const [, setIndex] = useState(1);
  const toRotate = ["make a website", "make an application", "do search engine optimization"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 500);

    return () => { clearInterval(ticker) };
  })

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);



    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);

    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);

    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to Asplay!</span>
                  <h1>{`We can `} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "make a website", "make an application", "do search engine optimization" ]'><span className="wrap">{text}</span></span></h1>
                  <p>We can make all kinds of websites and mobile applications for you, redesign your existing website or improve your reach by SEO</p>

                  <Nav.Link href='#connect'>
                    <button >Let's Connect <ArrowRightCircle size={25} /></button>
                  </Nav.Link>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
