import React from 'react'
import reactLogo from '../../Assets/logo.svg'
import classes from './Logo.module.css'

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={reactLogo} alt="LogoBurger"/>
        </div>
    )
}

export default Logo
