import React, { Component } from 'react'
import classes from './Level.module.css'

export default class Level extends Component {
    render() {
        return (
            <div className={classes.level}>
                <h5>Errores : {this.props.level}</h5>
            </div>
        )
    }
}
