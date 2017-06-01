import React, { Component } from 'react'
import { connect } from 'react-redux'

class TimeLineProfile extends Component {

  constructor(props){
    super(props)
    this.profile = props.profile 
    //console.log( props )
  }

  componentWillMount(){

  }

  render() {
    return (
      <div className="dashBoard">
          <h1>{this.profile}</h1>
      </div>
    );
  }

}

const mapStateToProps = (state , ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}


TimeLineProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeLineProfile)


export default TimeLineProfile;
