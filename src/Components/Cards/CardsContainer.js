import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Card from './Cards'
//import classes from './CardsContainer.module.css';

export class Cards extends Component {
    render() {

        // load cards 
const cards = Object.keys(this.props.cards)
.map(ingKey => {
    return (
        <Col sm='3'>
            <Card/>  
        </Col>
    
    )
});

        return (
                <Row>
                {cards}
                </Row>
        )
    }
}

export default Cards
