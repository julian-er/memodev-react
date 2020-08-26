import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Card from './Cards'
//import classes from './CardsContainer.module.css';

export class Cards extends Component {
turnCardHandler = (e) =>{
        try{
            e.target.style.backgroundImage ='none';
            e.target.style.backgroundColor = 'white';
            e.target.childNodes[0].style.display = 'block'
        }
        catch{
            //prevent clicks 

        }
       
}


    render() {


        // load cards 
const cards = Object.keys(this.props.cards)
.map(ingKey => {
    return (
        <Col sm='3' key={ingKey}>
            <Card loadImg={this.props.cards[ingKey].src} event={(e)=>this.turnCardHandler(e)}/>  
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
