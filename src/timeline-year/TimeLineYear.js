import React, { Component } from 'react';
import './TimeLineYear.css';

import TimeLineCard from '../timeline-card/TimeLineCard'

class TimeLineYear extends Component {

  constructor(props){
      super(props)
  }

  render() {
    return (
      <div className="year-card year-card--step6"  data-aos="zoom-in">

                <div className="head">
                    <h2>2017</h2>
                </div>

                <div className="head-month">
                    <h3>January</h3>
                </div>

                <div className="content">
                
                    <TimeLineCard/>

                    <TimeLineCard/>

                    <TimeLineCard/>

                    <TimeLineCard/>

                </div>

            </div>
    );
  }
}

export default TimeLineYear;
