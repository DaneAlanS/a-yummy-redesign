import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'animate.css/animate.css' ;
import {Navbar, Container, Nav, NavDropdown, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css";

import BlueBG from '../../static/assets/BG-1.png';

function buy() {

  useEffect(()=>{
    Aos.init({});
  },[])


return (
    <Container className="how-to-buy-wrapper">
      <Row>
        <Col> 

          <Row className="learning-phrase">
            <h1>HOW TO BUY YUMMY</h1>
            <span>Step-by-step instructions for purchasing Yummy Coin with Trust Wallet or MetaMask.</span>
          </Row>

          <Row className="how-to-video-wrapper">      
                <iframe width="700" height="360" src="https://www.youtube.com/embed/bZup7IK7qrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Row>

          <Row>
            <Col className="button-wrapper">
                <Button className="wallet-button">GET STARTED WITH TRUST WALLET</Button>
            </Col>
            <Col className="button-wrapper">
                <Button className="wallet-button">GET STARTED WITH METAMASK</Button>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </Container>
  );
}

export default buy;