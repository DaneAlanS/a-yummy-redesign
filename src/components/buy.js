import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Animate from 'animate.css-react'
import 'animate.css/animate.css' 
import {Navbar,Container, Popover, OverlayTrigger, Button} from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";

import LogoSquare from '../../static/assets/LogoSquareTransparent.png'

import WhiteBG from '../../static/assets/BG-3.png'
import OrangeBG from '../../static/assets/BG-2.png'
import BlueBG from '../../static/assets/BG-1.png'

function buy() {

  useEffect(()=>{
    Aos.init({});
  },[])


return (
  <div className="home-wrapper"></div>
  );
}

export default buy;