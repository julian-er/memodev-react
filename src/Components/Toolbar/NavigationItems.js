import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Play!</NavigationItem>
            <NavigationItem Link="/" click={props.changeLevel} styles={'white'}>Change difficulty</NavigationItem>
        </ul>
    )
}

export default NavigationItems
