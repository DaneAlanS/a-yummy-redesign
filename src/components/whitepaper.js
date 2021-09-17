import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'animate.css/animate.css' ;
import {Navbar, Container, Carousel, CarouselItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css";

import V2_Slide1 from '../../static/assets/slides/V2_1.png';
import V2_Slide2 from '../../static/assets/slides/V2_2.png';
import V2_Slide3 from '../../static/assets/slides/V2_3.png';
import V2_Slide4 from '../../static/assets/slides/V2_4.png';
import V2_Slide5 from '../../static/assets/slides/V2_5.png';
import V2_Slide6 from '../../static/assets/slides/V2_6.png';
import V2_Slide7 from '../../static/assets/slides/V2_7.png';
import V2_Slide8 from '../../static/assets/slides/V2_8.png';
import V2_Slide9 from '../../static/assets/slides/V2_9.png';
import V2_Slide10 from '../../static/assets/slides/V2_10.png';
import V2_Slide11 from '../../static/assets/slides/V2_11.png';
import V2_Slide12 from '../../static/assets/slides/V2_12.png';
import V2_Slide13 from '../../static/assets/slides/V2_13.png';
import V2_Slide14 from '../../static/assets/slides/V2_14.png';
import V2_Slide15 from '../../static/assets/slides/V2_15.png';
import V2_Slide16 from '../../static/assets/slides/V2_16.png';
import V2_Slide17 from '../../static/assets/slides/V2_17.png';
import V2_Slide18 from '../../static/assets/slides/V2_18.png';
import V2_Slide19 from '../../static/assets/slides/V2_19.png';
import V2_Slide20 from '../../static/assets/slides/V2_20.png';
import V2_Slide21 from '../../static/assets/slides/V2_21.png';
import V2_Slide22 from '../../static/assets/slides/V2_22.png';
import V2_Slide23 from '../../static/assets/slides/V2_23.png';
import V2_Slide24 from '../../static/assets/slides/V2_24.png';
import V2_Slide25 from '../../static/assets/slides/V2_25.png';
import V2_Slide26 from '../../static/assets/slides/V2_26.png';
import V2_Slide27 from '../../static/assets/slides/V2_27.png';
import V2_Slide28 from '../../static/assets/slides/V2_28.png';
import V2_Slide29 from '../../static/assets/slides/V2_29.png';
import V2_Slide30 from '../../static/assets/slides/V2_30.png';
import V2_Slide31 from '../../static/assets/slides/V2_31.png';
import V2_Slide32 from '../../static/assets/slides/V2_32.png';
import V2_Slide33 from '../../static/assets/slides/V2_33.png';
import V2_Slide34 from '../../static/assets/slides/V2_34.png';
import V2_Slide35 from '../../static/assets/slides/V2_35.png';
import V2_Slide36 from '../../static/assets/slides/V2_36.png';


function whitepaper() {

  useEffect(()=>{
    Aos.init({});
  },[])

return (
    <Container>
        <Carousel interval={null}>
          <Carousel.Item>
          <img src={V2_Slide1}/>
          <Carousel.Caption><span>1 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide2}/>
          <Carousel.Caption><span>2 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide3}/>
          <Carousel.Caption><span>3 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide4}/>
          <Carousel.Caption><span>4 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide5}/>
          <Carousel.Caption><span>5 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide6}/>
          <Carousel.Caption><span>6 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide7}/>
          <Carousel.Caption><span>7 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide8}/>
          <Carousel.Caption><span>8 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide9}/>
          <Carousel.Caption><span>9 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide10}/>
          <Carousel.Caption><span>10 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide11}/>
          <Carousel.Caption><span>11 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide12}/>
          <Carousel.Caption><span>12 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide13}/>
          <Carousel.Caption><span>13 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide14}/>
          <Carousel.Caption><span>14 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide15}/>
          <Carousel.Caption><span>15 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide16}/>
          <Carousel.Caption><span>16 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide17}/>
          <Carousel.Caption><span>17 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide18}/>
          <Carousel.Caption><span>18 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide19}/>
          <Carousel.Caption><span>19 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide20}/>
          <Carousel.Caption><span>20 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide21}/>
          <Carousel.Caption><span>21 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide22}/>
          <Carousel.Caption><span>22 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide23}/>
          <Carousel.Caption><span>23 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide24}/>
          <Carousel.Caption><span>24 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide25}/>
          <Carousel.Caption><span>25 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide26}/>
          <Carousel.Caption><span>26 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide27}/>
          <Carousel.Caption><span>27 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide28}/>
          <Carousel.Caption><span>28 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide29}/>
          <Carousel.Caption><span>29 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide30}/>
          <Carousel.Caption><span>30 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide31}/>
          <Carousel.Caption><span>31 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide32}/>
          <Carousel.Caption><span>32 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide33}/>
          <Carousel.Caption><span>33 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide34}/>
          <Carousel.Caption><span>34 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide35}/>
          <Carousel.Caption><span>35 of 36</span></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={V2_Slide36}/>
          <Carousel.Caption><span>36 of 36</span></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </Container>
  );
}

export default whitepaper;