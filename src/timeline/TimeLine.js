import React, { Component } from 'react';
import './TimeLine.css'
import './vendor/font-awesome/css/font-awesome.min.css'

import { connect } from 'react-redux'
import { closeTimeLine } from '../actions'

import { Button } from 'reactstrap';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import TimeLineCard from '../timeline-card/TimeLineCard'

import {
  Link
} from 'react-router-dom'

class TimeLine extends Component {

  constructor(props){
    super(props)
    this.history = props.history 
    console.log( props )
  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="dashBoard" /*style={{display: this.props.type }}*/ >
        {/*<Button onClick={this.props.closeTimeLine}>Close</Button>*/}
        <section id="timeline">
          <h1>A Timeline</h1>
          <div className="demo-card-wrapper" id="demo-card-wrapper">


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


          </div>
        </section>
        <Link to="/"><Button onClick={this.backBtn}>Close</Button></Link>
      </div>
    );
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
