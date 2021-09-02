import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Animate from 'animate.css-react'
import 'animate.css/animate.css' 
import {Container, Row, Col} from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";

import LogoSquare from '../../static/assets/LogoSquareTransparent.png'
import BKFCLogo from '../../static/assets/BareKnuckle.png'
import UNICEFLogo from '../../static/assets/UNICEF.png'
import WhiteBG from '../../static/assets/BG-3.png'
import OrangeBG from '../../static/assets/BG-2.png'
import BlueBG from '../../static/assets/BG-1.png'


function home() {

  useEffect(()=>{
    Aos.init({});
  },[])


return (
    <Container fluid className="home-wrapper">
      <Row className="animate__animated animate__fadeIn  landing-wrapper">
        <Col className="landing-paragraph-wrapper">
            <Row className="landing-text-container">
              <Row className="landing-phrase" xs={2}>Yummy is<span>Changing Lives</span>Across the Globe.</Row>   
              <Row className="landing-details">Yummy Crypto is a project launched on May 1st with a clear vision to deliver value to holders while providing contributions to help solve some of the world's most pressing issues.</Row>
              <Row>
                <a className="join-our-cause" href="/how-to-buy">Learn how to join our cause  <i className="fas fa-angle-right"></i></a>
              </Row>
          </Row>
        </Col>

        <Col className="landing-content-wrapper" xs={6}>
          <div className="video-wrapper">
            <iframe width="700" height="363" src="https://www.youtube.com/embed/oFu2nYNiIm8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
          </div>
        </Col>
      </Row>

      <Row className="divider-content-wrapper"  style={{ backgroundImage: `url(${WhiteBG})` }}>
        <Row data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="first-message">
          <Col>
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

      <Row className="contract-wrapper">
        <span className="contract" style={{ backgroundImage: `url(${OrangeBG})` }}>CONTRACT ADDRESS: 0x05f2df7b3d612a23fe12162a6c996447dce728a5 <i className="far fa-clipboard"></i></span>
      </Row>

        <Row className="darkBG" style={{ backgroundImage: `url(${BlueBG})` }}>
          <Row className="darkBG-follow-socials">
            <span>FOLLOW OUR SOCIALS TO KEEP UP WITH US.</span>
            <Row className="socials-big">
              <Col><a href="https://twitter.com/YummyCrypto" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter-square"></i></a></Col>
              <Col><a href="https://t.me/yummycoin" target="_blank" rel="noreferrer noopener"><i class="fab fa-telegram-plane"></i></a></Col>
              <Col><a href="https://www.reddit.com/r/yummycoin/" target="_blank" rel="noreferrer noopener"><i class="fab fa-reddit-square"></i></a></Col>
              <Col><a href="https://www.facebook.com/OfficialYummyCoin" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-square"></i></a></Col>
              <Col><a href="https://www.instagram.com/yummycharity/" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram-square"></i></a></Col>
              <Col><a href="https://www.youtube.com/c/YummyProjectOfficial/" target="_blank" rel="noreferrer noopener"><i class="fab fa-youtube-square"></i></a></Col>
            </Row>
          </Row>
          
          <Row className="full-socials">
            <Col><a className="twitter-timeline" data-lang="en" data-width="340" data-height="500" data-theme="dark" href="https://twitter.com/YummyCrypto?ref_src=twsrc%5Etfw"></a></Col>
            <Col xs={6} className='partners-disclaimer-wrapper'>
              <Row  className="partners-wrapper">
                <Col className="partner-logo-wrapper">
                  <a href="https://www.bareknuckle.tv/"  target="_blank" rel="noreferrer noopener"><img className="partnerlogo"src={BKFCLogo}></img></a>
                </Col>
                <Col className="partner-logo-wrapper">
                  <a href="https://www.unicef.org/"  target="_blank" rel="noreferrer noopener"><img className="partnerlogo"src={UNICEFLogo}></img></a>
                </Col>
              </Row>
              <Row className="legal">
                <Row>
                  <p><strong>LEGAL DISCLAIMER: </strong>
                      The information provided on YummyCrypto.com does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website’s content as such. The Yummy team does not recommend that any cryptocurrency should be bough, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing Yummy, you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token “as is” and is not required to provide any support or services. You should have no expectation of any form from Yummy and its team. Although Yummy is a community driven token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on Crypto do not purchase it because the team cannot ensure compliance with your territory’s regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
                  </p>
                </Row>
                <Row>
                  <p><strong>RISK DISCLOSURE: </strong>
                    Please note there are always risks associated with smart-contracts. Please use at your own risk. Yummy is not a registered broker, analyst, or investment advisor. Everything that’s provided on this site is purely for guidance, informational and educational purposes, and fun. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks involved with any trading done in any financial market. Do not trade with money that you cannot afford to lose.
                  </p>
                </Row>
              </Row>
            </Col>
            <Col className="fb-page">
              <iframe className="fb-page"src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOfficialYummyCoin%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="500" scrolling="no" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>          
            </Col>
          </Row>

        </Row>
    </Container>
    
  );
}

export default home;