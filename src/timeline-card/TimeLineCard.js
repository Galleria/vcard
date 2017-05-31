import React, { Component } from 'react'
import './TimeLineCard.css'


class TimeLineCard extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="demo-card"  data-aos="zoom-in">
          <div>
              <div className="head" >
                  <div className="number-box">
                      <span>01</span>
                  </div>
                  <h2><span className="small">Subtitle</span> Technology</h2>
              </div>
              <div className="body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                  {/*<img src="http://placehold.it/1000x500" alt="Graphic" /> */}
              </div>
          </div>
      </div>
    );
  }
}

export default TimeLineCard;
