import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'animate.css/animate.css' 
import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./home.js"
import Buy from "./buy.js"
import Logo from '../../static/assets/YummyCryptoTransparent.png'
import PCS from '../../static/assets/pancakeswap.png'
import Bitmart from '../../static/assets/bitmart.png'

function App() {
  
  return (
    <Router>
      <Container fluid className="app">
        <Row>
          <Col>
            <Navbar expand="lg" variant="dark">
              <Container>
                <Navbar.Brand href="#home"><img className="transparentlogo"src={Logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto left-nav">
                    <NavDropdown className ="drop-down" title="Documents" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1"><a href="https://github.com/Quillhash/Audit_Reports/blob/master/Yummy%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf" target="_blank" rel="noreferrer noopener"> Audit</a></NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2"><a href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT" target="_blank" rel="noreferrer noopener"> Whitepaper</a> </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className ="drop-down" title="Buy Yummy" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1"><a href="https://pancakeswap.finance/swap" target="_blank" rel="noreferrer noopener"> <img className="pcs"src={PCS}></img>PancakeSwap</a></NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2"><a href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT" target="_blank" rel="noreferrer noopener"> <img className="bitmart"src={Bitmart}></img>Bitmart</a> </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                  <Nav className="me-auto right-nav">
                    <Nav.Link href="#action"><a href="https://twitter.com/YummyCrypto" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://t.me/yummycoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-telegram"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.reddit.com/r/yummycoin/" target="_blank" rel="noreferrer noopener"><i className="fab fa-reddit"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.facebook.com/OfficialYummyCoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.instagram.com/yummycharity/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.youtube.com/c/YummyProjectOfficial/" target="_blank" rel="noreferrer noopener"><i className="fab fa-youtube"></i></a></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>

        <Row>
          <Col>
            <Switch>
              <Route path="/">
                <Home/>
              </Route>
              <Route path="/how-to-buy">
                <Buy/>
              </Route>
            </Switch>
          </Col>
        </Row>

      </Container>

    </Router>


  );
}

export default App;
