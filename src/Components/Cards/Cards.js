import React, { Component } from 'react'
import classes from './Cards.module.css'



export class Cards extends Component {
    render() {
        return (
            <div className={classes.divCard} onClick={this.props.event} id={this.props.idSelector}>
                <img src={this.props.loadImg} alt='lenguaje de programación' className={classes.cardImg}></img>
            </div>
        )
    }
}

export default Cards
