import React, { Component } from 'react'
import classes from './Level.module.css'

export default class Level extends Component {
    render() {
        return (
            <div className={classes.level}>
                <h5>El nivel seleccionado es : {this.props.level}</h5>
            </div>
        )
    }
}
