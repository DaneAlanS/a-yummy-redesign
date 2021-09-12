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

function whitepaper() {

  useEffect(()=>{
    Aos.init({});
  },[])


return (
    <Container>
        <Row>
            <div>WAITING FOR WHITEPAPER GRAPHICS</div>
        </Row>
    </Container>
  );
}

export default whitepaper;