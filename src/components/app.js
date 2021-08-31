import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'animate.css/animate.css' 
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./home.js"
import Logo from '../../static/assets/YummyCryptoTransparent.png'

function App() {
  
  return (
    <Router>
      <div className="app">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><img className="transparentlogo"src={Logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto left-nav">
                 <NavDropdown className ="drop-down" title="Documents" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><a href="https://pancakeswap.finance/swap" target="_blank" rel="noreferrer noopener"> Audit</a></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"><a href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT" target="_blank" rel="noreferrer noopener"> Whitepaper</a> </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className ="drop-down" title="Buy Yummy" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><a href="https://pancakeswap.finance/swap" target="_blank" rel="noreferrer noopener"> PancakeSwap</a></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"><a href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT" target="_blank" rel="noreferrer noopener"> Bitmart</a> </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto right-nav">
                <Nav.Link href="#audit"><a href="https://twitter.com/YummyCrypto" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter"></i></a></Nav.Link>
                <Nav.Link href="#audit"><a href="https://t.me/yummycoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-telegram"></i></a></Nav.Link>
                <Nav.Link href="#audit"><a href="https://www.reddit.com/r/yummycoin/" target="_blank" rel="noreferrer noopener"><i className="fab fa-reddit"></i></a></Nav.Link>
                <Nav.Link href="#audit"><a href="https://www.facebook.com/OfficialYummyCoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook"></i></a></Nav.Link>
                <Nav.Link href="#audit"><a href="https://www.instagram.com/yummycharity/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></Nav.Link>
                <Nav.Link href="#audit"><a href="https://www.youtube.com/c/YummyProjectOfficial/" target="_blank" rel="noreferrer noopener"><i className="fab fa-youtube"></i></a></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


      </div>
    </Router>


  );
}

export default App;
