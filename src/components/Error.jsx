import React from "react";


// navbar
import { useEffect, useState } from "react";
import { Container, Nav, Navbar,Col, Row } from "react-bootstrap";
import { Link, renderMatches } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import "animate.css";
// import { useEffect, useState } from "react";
// import { Col, Container, Nav, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/header-img.svg";





export default function Error() {
  // return <div>Error</div>;
  // export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
  
    const [, setIndex] = useState(1);
    const toRotate = [
      "make a website",
      "make an application",
      "do search engine optimization",
    ];
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, 200);
  
      return () => {
        clearInterval(ticker);
      };
    });
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex((prevIndex) => prevIndex - 1);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    return (
      <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="asplay" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              
              
              {/* <Link
                to="/blog"
                className={
                  activeLink === "blog"
                    ? "external_link active navbar-link"
                    : "external_link navbar-link"
                }
                onClick={() => onUpdateActiveLink("blog")}
              >
                Blog
              </Link> */}


              {/* <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Link to="/services" className={activeLink === 'services' ? 'external_link active navbar-link' : 'external_link navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Link> */}
            </Nav>
            
            
            
            {/* <span className="navbar-text"> */}
              {/* <div className="social-icon"> */}
                {/* <a href="/#"><img src={navIcon1} alt="" /></a>
                <a href="/#"><img src={navIcon2} alt="" /></a> */}
                {/* <a href="https://www.instagram.com/_asplay_/" target="_blank"> */}
                  {/* <img src={navIcon3} alt="Instagram" /> */}
                {/* </a> */}
              {/* </div> */}
              {/* <HashLink to="/#connect"> */}
                {/* <button id="vvd" className="vvd"> */}
                  {/* <span>Let’s Connect</span> */}
                {/* </button> */}
              {/* </HashLink> */}
            {/* </span> */}


            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    



    
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated" : ""}>
                    <span className="tagline">Welcome to Asplay!</span>
                    <h1>
                      {`SORRY!!! Looks like something went wrong`}{" "}
                      {/* <span
                        className="txt-rotate"
                        dataperiod="1000"
                        data-rotate='[ "make a website", "make an application", "do search engine optimization" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span> */}
                    </h1>
                    <p>
                     Go Back to the Home Page
                    </p>
  
                    <Nav.Link href="/#home">
                      <button>
                        Home Page <ArrowRightCircle size={25} />
                      </button>
                    </Nav.Link>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    
  


    

    
      {/* <footer className="footer">
        <Container>
          <Row className="align-items-center"> */}
            {/* <Newsletter /> */}
            {/* <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon"> */}
                {/* <a href="/#"><img src={navIcon1} alt="Icon" /></a>
                <a href="/#"><img src={navIcon2} alt="Icon" /></a> */}
                {/* <a href="https://www.instagram.com/_asplay_/" target="_blank"><img src={navIcon3} alt="Instagram" /></a> */}
              {/* </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer> */}
    </>
    )
  };

  