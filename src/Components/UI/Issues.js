import React, { Component } from 'react'
import classes from './Issues.module.css'

export default class issues extends Component {
    render() {
        return (
            <div className={classes.issues}>
                <h5>Errores : {this.props.issues}</h5>
            </div>
        )
    }
}
