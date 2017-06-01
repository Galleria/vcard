import React, { Component } from 'react'

import { connect } from 'react-redux'
import { closeTimeLine } from '../actions'

import { Button } from 'reactstrap'

import {Link} from 'react-router-dom'


import TimeLineYear from '../timeline-year/TimeLineYear'
import TimeLineProfile from '../timeline-profile/TimeLineProfile'

import './TimeLine.css'

import '../vendor/font-awesome/css/font-awesome.min.css'
import AOS from '../vendor/animation/aos.js'
import '../vendor/animation/aos.css'

class TimeLine extends Component {

  constructor(props){
    super(props)
    this.history = props.history 
    this.match = props.match 
    //console.log( props )
  }

  componentWillMount(){
    AOS.init({
      duration: 200,
      delay: 500,
    });

    this.year = []
  }

  render() {

    this.year.push( <TimeLineYear year="2017"/> )
    this.year.push( <TimeLineYear year="2016"/> )
    this.year.push( <TimeLineYear year="2015"/> )

    return (
      <div className="dashBoard">
        <div className="dashBoard-left">
          <TimeLineProfile profile={this.match.params.id} />
        </div>
        <div className="dashBoard-right">
          <section id="timeline">
            <h1>A Timeline for : {this.match.params.id}</h1>
            <div className="demo-card-wrapper" id="demo-card-wrapper">
              {this.year}
            </div>
          <button className="circle-btn" onClick={this.addCard}>+</button>
          </section>
        </div>
        <Link to="/"><Button onClick={this.backBtn}>Close</Button></Link>
      </div>
    );
  }

  addCard(){
    this.year.push( <TimeLineYear year="2014"/> )
  }
}

const mapStateToProps = (state , ownProps) => {
  return {
    type: state.timeline
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeTimeLine: () => {
        dispatch(closeTimeLine())
    }
  }
}


TimeLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeLine)


export default TimeLine;
