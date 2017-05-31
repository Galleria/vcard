import React, { Component } from 'react';
import logo from '../logo.svg';
import './Index.css';

import VCard from '../v-card/V-Card'
import { Container, Row, Col } from 'reactstrap'

import SlideShow from './slide-show/SlideShow'

class Index extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    //const { dispatch, view } = this.props
  }

  render() {
    
    let cardlist = ['Group','Test','Zero','Kamo']
    let cards = cardlist.map( (name,idx) => {
      return (
        <Col key={idx} >
          <VCard text={name} key={idx} />
        </Col> 
      )
    });

    let row_line = 3 

    let row = []
    let col = []
    cards.forEach( (card,idx) =>{
      if( idx > 0 && idx % (row_line-1) == 0  ){
        col.push( card )
        row.push( <Row key={idx}> {col} </Row> )
        col = []
      }else if( idx === cards.length-1 ){
        col.push( card )
        for( let i=0 ; i< row_line-(col.length-1) ; i++ ){
          col.push( <Col key={i} /> )
        }
        row.push( <Row key={idx}> {col} </Row> )
        col = []
      }else{
        col.push( card )
      }
    })

    return (
      <div className="App">

          <Row>
              <Col>
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to VCard</h2>
                </div>
              </Col>
          </Row>

          <Container>

            <Row className="App-Slide">
              <Col>
                <SlideShow/>
              </Col>
            </Row>

            {row}
            {/*
            <Row>
                {cards}
            </Row>
            */}
          </Container>

      </div>
    );
  }

}

export default Index
