import React, { Component } from 'react';

import TimeLine from './timeline/TimeLine'
import Index from './index/Index'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    //const { dispatch, view } = this.props
     const { location } = this.props
  }

  render() {
    const { location } = this.props

    return (
      <Router >
        <div>
          <Route exact path="/" component={Index}/>
          <Route path="/timeline/:id" component={TimeLine}/>
        </div>
      </Router >
    );
  }

}

export default App
