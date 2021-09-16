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
import YummyLogoTransparent from '../../static/assets/YummyLogoTransparent.svg';
import BKFCLogo from '../../static/assets/partners/BareKnuckle.png';
import CoinGecko from '../../static/assets/partners/CoinGecko.png';
import BitmartLogo from '../../static/assets/partners/bitmart.png';
import CoinBase from '../../static/assets/partners/coinbase.png';
import CoinHunt from '../../static/assets/partners/coinhunt.png';
import CoinMarket from '../../static/assets/partners/coinmarketcap.png';
import BSCscan from '../../static/assets/partners/bscscan.png';
import Bcharity from '../../static/assets/partners/Bcharity.png';
import Foundation from '../../static/assets/partners/21foundation.png';
import Sorai from '../../static/assets/partners/sorai.png';
import MDAppeal from '../../static/assets/partners/mdappeal.jpg';
import SpaceGang from '../../static/assets/partners/spacegang.png';
import Soku from '../../static/assets/partners/soku.png';
import DreamField from '../../static/assets/partners/dreamfield_logo.png';
import Minty from '../../static/assets/partners/minty.svg'
import Slam from '../../static/assets/partners/slam.png'
import PCS from '../../static/assets/partners/pancakeswap.png';

import Roadmap from '../../static/assets/roadmap.png'
import WaveDivider from '../../static/assets/wave.svg';
import Sprout from '../../static/assets/sprout.png';
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
              <Row className="landing-phrase"><p>Together We're<span>Changing Lives</span>Across the Globe.</p></Row>   
              <Row className="landing-details"><p>Yummy Crypto is a project launched on May 1st with a clear vision to deliver value to holders while providing contributions to help solve some of the world's most pressing issues.</p></Row>
              <Row className="button-wrapper">
                <Button className="join-our-cause" href="/learn">Learn How To Buy Yummy    <i class="fas fa-long-arrow-alt-right"></i> </Button>
              </Row>
          </Row>
        </Col>
        <Col className="video-contract-wrapper">
            <div className="video-wrapper">
                <iframe width="700" height="363" src="https://www.youtube.com/embed/oFu2nYNiIm8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
            </div>
            <span className="contract" style={{ backgroundImage: `url(${BlueBG})` }}>CONTRACT ADDRESS: 0x05f2df7b3d612a23fe12162a6c996447dce728a5 <i className="far fa-clipboard"></i></span>
            <Button className="join-our-cause" href="https://www.yummyupgrade.com/" target="_blank" rel="noreferrer noopener">V2 is Here! Migrate Now!</Button>
        </Col>
      </Row> 

    
      <Row className="divider-content-wrapper">
        <Row data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="first-message">
          <Col className="yummylogo-column">
            <Row className="yummylogo-wrapper">
              <img className="yummylogo"src={YummyLogoTransparent}></img>
            </Row>
          </Col>
          <Col className="divider-message-wrapper">
            <Row className="divider-message">
              <p>Within our short history, we've already <strong>donated over $1.1M</strong>, and <strong>35% of the total token supply has been burned</strong> as a method to return value to our holders. And that's just the start of it! </p>
              <p>We recently introduced our <strong>Growth Fund</strong> to further maximize Yummy holders' returns through <strong>daily buybacks and burns.</strong> In addition, we have secured partnerships with prominent industry players such as <a href="https://www.bareknuckle.tv/"  target="_blank" rel="noreferrer noopener">Bare Knuckle FC</a> to further advance our social exposure within the crypto space and have much more in the works!</p>
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

      <Row className="darkBG" >
        <Row className="text-sprout-wrapper">
          <Col className="darkBG-text">
            <p>Our leadership team is as thoroughly passionate about the long term growth of Yummy. We work hard to have a positive impact in the World, while maximizing the returns to our token Holders through our exceptional tokenomics.</p>
            <p>We are placing an emphasis on complete transparency, sustainable strategic growth decisions and innovative marketing campaigns that will ensure Yummy will reach its maximum potential.</p>
            <p>In addition to daily updates throughout our social channels, our leadership is very frequently available on the Yummy Coin Telegram for you to ask questions, give feedback or provide ideas. All are welcome to our Telegram/Discord channels, even non-Yummy holders.</p>
          </Col>
          <Col className="sprout-image-wrapper">
            <img className="sprout"src={Sprout}></img>
          </Col>
        </Row>
        <Row className="partner-grid-wrapper">
          <span>Check Out Our Partners!</span>
          <div className="partner-grid">
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.bareknuckle.tv/">
              <img src={BKFCLogo}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.sokuswap.org/">
              <img src={Soku}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://mintyswap.com/">
              <img src={Minty}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://pancakeswap.finance/swap">
              <img src={PCS}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.dreamfield.co/">
              <img src={DreamField}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://slamtoken.com/">
              <img src={Slam}></img>
            </a>            
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.bitmart.com/en">
              <img src={BitmartLogo}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.binance.charity/">
              <img src={Bcharity}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://marinadalglishappeal.org/">
              <img src={MDAppeal}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://oursorai.com/">
              <img src={Sorai}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://21foundation.com/">
              <img src={Foundation}></img>
            </a>            
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://spacegang.club/">
              <img src={SpaceGang}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.coinbase.com/">
              <img src={CoinBase}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://coinhunt.cc/">
              <img src={CoinHunt}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://coinmarketcap.com/">
              <img src={CoinMarket}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.coingecko.com/en">
              <img src={CoinGecko}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://bscscan.com/">
              <img src={BSCscan}></img>
            </a>
            
            
            
            
          </div>
        </Row>

          <Row className="roadmap-wrapper">
            <h1>ROADMAP</h1>
            <img className="roadmap"src={Roadmap}></img>
          </Row>
        </Row>
      
</Container>
    
  );
}

export default home;