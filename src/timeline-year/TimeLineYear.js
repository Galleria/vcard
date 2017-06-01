import React, { Component } from 'react';
import './TimeLineYear.css';

import TimeLineCard from '../timeline-card/TimeLineCard'

class TimeLineYear extends Component {

  constructor(props){
      super(props)
  }

  render() {

      let cards = []

      let rand = Math.floor((Math.random() * 10) + 1)

      for( let i=0;i<rand;i++ ){
          cards.push(<TimeLineCard/>)
      }

    return (
      <div className="year-card year-card--step6"  data-aos="zoom-in">

                <div className="head">
                    <h2> {this.props.year} </h2>
                </div>

                <div className="head-month">
                    <h3 style={{color:'black'}}>January</h3>
                </div>

                <div className="content">
                
                   {cards}

                </div>

            </div>
    );
  }
}

export default TimeLineYear;
