import React, { Component } from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SlideShow.css'

class SlideShow extends Component {

  constructor(props){
    super(props)
  }

  render() {
   
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    let test = []
    for( let i=0 ; i<6 ; i++ ){
        test.push( <div className="SliderH"><h3>{i+1}</h3></div> )
    }

    return (
      <div>
        <Slider {...settings}>
            {test}
        </Slider>
      </div>
    );
  }

}

export default SlideShow
