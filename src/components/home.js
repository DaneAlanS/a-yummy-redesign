import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Animate from 'animate.css-react'
import 'animate.css/animate.css' 
import {Container, Row, Col, Button} from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";

import LogoSquare from '../../static/assets/LogoSquareTransparent.png';
import Roadmap from '../../static/assets/roadmap.png'
import WaveDivider from '../../static/assets/wave.svg';
import Sprout from '../../static/assets/sprout.png';
import WhiteBG from '../../static/assets/BG-3.png';
import OrangeBG from '../../static/assets/BG-2.png';
import BlueBG from '../../static/assets/BG-1.png';


function home() {

  useEffect(()=>{
    Aos.init({});
  },[])


return (
    <Container fluid className="home-wrapper">
      <Row className="animate__animated animate__fadeIn  landing-wrapper">
        <Col  className="landing-paragraph-wrapper">
            <Row className="landing-text-container">
              <Row className="landing-phrase">Together We're<span>Changing Lives</span>Across the Globe.</Row>   
              <Row className="landing-details">Yummy Crypto is a project launched on May 1st with a clear vision to deliver value to holders while providing contributions to help solve some of the world's most pressing issues.</Row>
              <Row className="button-wrapper">
                <Button className="join-our-cause" href="/learn">Learn How to Buy Yummy and Join Our Cause  <i className="fas fa-angle-right"></i></Button>
              </Row>
          </Row>
        </Col>
        <Col className="video-contract-wrapper">
            <div className="video-wrapper">
                <iframe width="700" height="363" src="https://www.youtube.com/embed/oFu2nYNiIm8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
            </div>
            <span className="contract" style={{ backgroundImage: `url(${BlueBG})` }}>CONTRACT ADDRESS: 0x05f2df7b3d612a23fe12162a6c996447dce728a5 <i className="far fa-clipboard"></i></span>
        </Col>
      </Row>

    
      <Row className="divider-content-wrapper"  style={{ backgroundImage: `url(${WhiteBG})` }}>
        <Row data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="first-message">
          <Col className="yummylogo-column">
            <Row className="yummylogo-wrapper">
              <img className="yummylogo"src={LogoSquare}></img>
            </Row>
          </Col>
          <Col className="divider-message-wrapper">
            <Row className="divider-message">
              <p>Within our short history, we've already <strong>donated over $1.1M</strong>, and <strong>35% of the total token supply has been burned</strong> as a method to return value to our holders. And that's just the start of it! </p>
              <p>We recently introduced our <strong>Growth Fund</strong> to further maximize Yummy holders' returns through <strong>daily buybacks and burns.</strong> In addition, we have secured partnerships with <a href="https://www.unicef.org/"  target="_blank" rel="noreferrer noopener">UNICEF</a> and prominent industry players such as <a href="https://www.bareknuckle.tv/"  target="_blank" rel="noreferrer noopener">Bare Knuckle FC</a> further to advance our social exposure within the crypto space and have much more in the works!</p>
              </Row>
          </Col>
        </Row>

        <Row data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1000" className="numbers-wrapper">
          <Col className="numbers"><strong>$1,125,000</strong>
            <h3>AMOUNT DONATED</h3>
            <p>Total of our (blockchain verified) donations to Binance Lunch For Children.</p>
          </Col>
          <Col className="numbers"><strong>3,416,653</strong>
            <h3>MEALS SERVED</h3>
            <p>Every meal served represents a real person with a full stomach because of you.</p>
          </Col>
          <Col className="numbers"><strong>75,000</strong>
            <h3>HOLDERS</h3>
            <p>75,000 holders who have decided to join us in our mission to make the World a better place.</p>
          </Col>
        </Row>               
      </Row>
      <Row>
        <img className="wave-divider"src={WaveDivider}></img>
      </Row>

      <Row className="darkBG" style={{ backgroundImage: `url(${BlueBG})` }}>
          <Col className="darkBG-text">
            <p>Our leadership team is as thoroughly passionate about the long term growth of Yummy. We work hard to have a positive impact in the World, while maximizing the returns to our token Holders through our exceptional tokenomics.</p>
            <p>We are placing an emphasis on complete transparency, sustainable strategic growth decisions and innovative marketing campaigns that will ensure Yummy will reach its maximum potential.</p>
            In addition to daily updates throughout our social channels, our leadership is very frequently available on the Yummy Coin Telegram for you to ask questions, give feedback or provide ideas. All are welcome to our Telegram/Discord channels, even non-Yummy holders.
          </Col>
          <Col className="sprout-image-wrapper">
            <img className="sprout"src={Sprout}></img>
          </Col>
          <Row className="roadmap-wrapper">
            <h1>ROADMAP</h1>
            <img className="roadmap"src={Roadmap}></img>
          </Row>
        </Row>
      
</Container>
    
  );
}

export default home;