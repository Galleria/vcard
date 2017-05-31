import React, { Component } from 'react';
import './TimeLine.css'

import { connect } from 'react-redux'
import { closeTimeLine } from '../actions'

import { Button } from 'reactstrap'

import TimeLineYear from '../timeline-year/TimeLineYear'

import {Link} from 'react-router-dom'

import './vendor/font-awesome/css/font-awesome.min.css'
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
  }

  render() {
    return (
      <div className="dashBoard">
        <div className="dashBoard-left"></div>
        <section id="timeline" className="dashBoard-right">
          <h1>A Timeline for : {this.match.params.id}</h1>
          <div className="demo-card-wrapper" id="demo-card-wrapper">

            <TimeLineYear/>
            <TimeLineYear/>
            <TimeLineYear/>
          </div>
        <button className="circle-btn" onClick={this.addCard}>+</button>
        </section>
        <Link to="/"><Button onClick={this.backBtn}>Close</Button></Link>
      </div>
    );
  }

  addCard(){
    alert('addCard')
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
