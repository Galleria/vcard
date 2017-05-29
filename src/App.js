import React, { Component } from 'react';

import TimeLine from './timeline/TimeLine'
import Index from './index/Index'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    //const { dispatch, view } = this.props
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Index}/>
          <Route path="/timeline" component={TimeLine}/>
        </div>
      </Router>
    );
  }

}

export default App
