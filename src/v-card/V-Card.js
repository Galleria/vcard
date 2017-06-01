import React, { Component } from 'react'
import './V-Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { openTimeLine, closeTimeLine } from '../actions'
import { connect } from 'react-redux'


import {
  Link
} from 'react-router-dom'

class VCard extends Component{

    constructor(props){
        super(props)
        //console.dir(props)

        this.openTimeLine = this.props.openTimeLine
        this.closeTimeLine = this.props.closeTimeLine

    }

//style={{display: this.state.showStore ? '' : 'none' }}
    render() {
        return (
            <Link to={"/timeline/"+this.props.text}>
            <div >
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBlock>
                    <CardTitle>{this.props.text}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={this.props.openTimeLine}>Open</Button>
                    <Button onClick={this.props.closeTimeLine}>Close</Button>
                    <Button onClick={this.Hello}>Alert Status</Button>
                    </CardBlock>
                </Card>
            </div>
            </Link>
        );
    }

    Hello = () => {
        //alert ('TimeLine status : '+ this.props )
        console.log('TimeLine status : '+this.props.type)
    }
    /*
    openTimeLine = () => {
        //this.handlers.dispatch( { type: 'Open'} ) 
        alert( 'openTimeLine' )
    }
    */
}

const mapStateToProps = (state , ownProps) => {
    //console.log( ownProps )
    //console.log( state )
  return {
    type: state.timeline
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openTimeLine: () => {
        dispatch(openTimeLine())
    },
    closeTimeLine: () => {
        dispatch(closeTimeLine())
    }
  }
}

VCard = connect(mapStateToProps,mapDispatchToProps)(VCard)

export default VCard;