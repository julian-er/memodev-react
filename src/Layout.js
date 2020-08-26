import React, { Component } from 'react'
import Aux from './Components/hoc/auxiliar';
import Toolbar from './Components/Toolbar/Toolbar'
import classes from './Layout.module.css'
import Modal from './Components/UI/Modal'
import { Button, Col, Row, Container } from 'reactstrap';
import CardContainer from './Components/Cards/CardsContainer'
import Level from './Components/UI/Level'
import Issues from './Components/UI/Issues'




class Layout extends Component {

state = {
   levelSelected:false,
   level:'',
   cards:'',
   attemps:'',
   issues:0,
   verifyCards:[],
}

componentDidMount = async ( ) =>{
    const res = await fetch('https://memodev-b5134.firebaseio.com/memo.json')
    const data = await res.json()
    if (data.length !== 0){
        //sort in another random order
        data.sort(Order);
            function Order (a,b){
                return Math.random() -0.5;
            }
    }
    // set state with cards info
    this.setState({
        cards:data
    })

}
// if the user clicks out of the card/modal, close te backdrop and select default medium level 
selectDefault = () =>{
    this.setState({
        levelSelected:true,
        level:'medium',
        attemps:'10'
    })
}

selectDificultyHandler = (difficulty, attemps) =>{
    this.setState({
        levelSelected:true,
        level: difficulty,
        attemps: attemps
    })
}

setIssuesHandler = () =>{
    this.setState({
        issues: this.state.issues + 1
    })
}

    render() {
        let selector
        if(!this.state.levelSelected){
            selector = (<Modal show={!this.state.levelSelected} clicked={this.selectDefault}>
                            <Row>
                                <Col sm='12'>
                                    <h2>Chose your difficulty!</h2>
                                </Col>
                            </Row>
                            <Row className={classes.Buttons}>
                                <Col sm='12'>
                                    <Button color="success" size="lg" block onClick={()=>this.selectDificultyHandler('Easy Mode', 20)}>Easy Mode</Button>
                                </Col>
                            </Row>
                            <Row className={classes.Buttons}>
                                <Col sm='12'>
                                    <Button color="warning" size="lg" block onClick={()=>this.selectDificultyHandler('Medium', 10)}>Medium</Button>
                                </Col>
                            </Row>
                            <Row className={classes.Buttons}>
                                <Col sm='12'>
                                    <Button color="danger" size="lg" block onClick={()=>this.selectDificultyHandler('Hard Mode', 5)}>Coder Expert!</Button>
                                </Col>
                            </Row>
                        </Modal>)
        }

        // add difficulty to title
        if(this.state.levelSelected){
            document.title = `Memo Dev - ${this.state.level}`
        }else{
            document.title = `Memo Dev`
        }

        return (
            <Aux>
                <Container fluid>
                <Toolbar/>
                {selector}
                <CardContainer cards={this.state.cards} className={classes.BackBlue} issues={()=>this.setIssuesHandler()}/>
                <Row>
                    <Col sm='6'>
                        <Level level={this.state.level}></Level>
                    </Col>
                    <Col sm='6'>
                        <Issues issues={this.state.issues}></Issues>
                    </Col>
                </Row>
                </Container>
            </Aux>   
        )
    }
}

export default Layout;