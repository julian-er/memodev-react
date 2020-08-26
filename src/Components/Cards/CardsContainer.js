import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Card from './Cards'

export class Cards extends Component {
state={
    compare:[],
}

turnCardHandler = (e) =>{
        try{

            if(this.state.compare.length === 1){
                e.target.style.backgroundImage ='none';
                e.target.style.backgroundColor = 'white';
                e.target.childNodes[0].style.display = 'block'
    
             try {  this.setState({
                    compare : [...this.state.compare,{"target":e.target, "src":e.target.childNodes[0].src, "id":e.target.id}]
                })
                
                setTimeout(() => {
                try {if(this.state.compare[0].src === this.state.compare[1].src){
                    
                    console.log('Aca, conta el acierto')

                }else{
                    
                    console.log('Aca, conta el Error!!')
                    // turn cards
                    let firstCard = this.state.compare[0]
                    firstCard.target.style=''
                    firstCard.target.childNodes[0].style.display='none'
                    let secondCard = this.state.compare[1]
                    secondCard.target.style=''
                    secondCard.target.childNodes[0].style.display='none'
                    
                    //increase issue
                    this.props.issues()

                    //return state array
                    this.setState({
                        compare : []
                    }) 
                    

                } }catch(err){
                    console.log(err)
                }
                
                }, 1000);}catch{

                    // prevent clicks 

                }
            }else{
                e.target.style.backgroundImage ='none';
                e.target.style.backgroundColor = 'white';
                e.target.childNodes[0].style.display = 'block'    

                this.setState({
                    compare : [{"target":e.target, "src":e.target.childNodes[0].src, "id":e.target.id}]
                })
            }
     
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
        <Col sm='3' key={ingKey} >
            <Card loadImg={this.props.cards[ingKey].src} event={(e)=>this.turnCardHandler(e)} idSelector={ingKey}/>  
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
