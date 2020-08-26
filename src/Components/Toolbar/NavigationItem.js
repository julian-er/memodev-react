import React from 'react'
import classes from './NavigationItem.module.css'

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem} style={{color:`${props.styles}`}}>
            <a href={props.link} onClick={props.click} className={props.active ? classes.active : null }>{props.children}</a>
        </li>
    )
}

export default NavigationItem
