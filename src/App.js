import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TimeLine from './timeline/TimeLine'

import VCard from './v-card/V-Card'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    //const { dispatch, view } = this.props
  }

  render() {
    
    let cardlist = ['Group','Test','Zero','Kamo']
    let cards = cardlist.map( (name,idx) => <Col key={idx} ><VCard text={name} key={idx} /></Col> );

    return (
      <div className="App">
        <Container>
          <Row>
              <Col>
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
              </Col>
          </Row>
          <Row>
            <Col>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </Col>
          </Row>
          <Row>
              {cards}
          </Row>
        </Container>
        <TimeLine />
      </div>
    );
  }

}

export default App
