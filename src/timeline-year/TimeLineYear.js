import React, { Component } from 'react';
import './TimeLine.css';

class TimeLineCard extends Component {

  constructor(props){

  }

  render() {
    return (
      <div class="demo-card demo-card--step1"  data-aos="zoom-in">
          <div>
              <div class="head" >
                  <div class="number-box">
                      <span>01</span>
                  </div>
                  <h2><span class="small">Subtitle</span> Technology</h2>
              </div>
              <div class="body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                  <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
          </div>
      </div>
    );
  }
}

export default TimeLineCard;
