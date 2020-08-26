import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Card from './Cards'
import classes from './CardsContainer.module.css'

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
                
                
                try {
                    if(this.state.compare[0].src === e.target.childNodes[0].src){
                        //match

                        this.props.matchs()

                }else{
                    //don't match
                setTimeout(() => {   
                    // turn cards
                    let firstCard = this.state.compare[0]
                    firstCard.target.style=''
                    firstCard.target.childNodes[0].style.display='none'
                    //console.log(this.state.compare[1].target)
                    let secondCard = this.state.compare[1]
                    secondCard.target.style=''
                    secondCard.target.childNodes[0].style.display='none'

                    //clear state    
                    this.setState({
                        compare:[]
                    })
                    
                    //increase issue
                    this.props.issues()

                }, 1000);

                

                } }catch(err){
                    console.log(err)
                    console.log(this.state.compare)
                }
                
                
            
            
               //return state array
               
            

            }catch{

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
        <Col sm='3' key={ingKey} className={classes.divCard}>
            <Card loadImg={this.props.cards[ingKey].src} event={(e)=>this.turnCardHandler(e)} idSelector={ingKey}/>  
        </Col>
    
    )
});

        return (
         
                <Row className={classes.HCard}>
                {cards}
                </Row>
            
                
        )
    }
}

export default Cards
