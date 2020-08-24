import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Play!</NavigationItem>
            <NavigationItem link="/">Select difficulty</NavigationItem>
        </ul>
    )
}

export default NavigationItems
