import React, { Component } from 'react';
import './TimeLine.css';

import { connect } from 'react-redux'
import { closeTimeLine } from '../actions'

import { Button } from 'reactstrap';

class TimeLine extends Component {

  render() {
    return (
      <div className="dashBoard" style={{display: this.props.type }}>
        <Button onClick={this.props.closeTimeLine}>Close</Button>
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
