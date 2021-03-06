import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../UI/Logo'
import NavigationItems from './NavigationItems'
import { Row } from 'reactstrap'
//import DrawerToggle from '../UI/DrawerToggle'

const Toolbar = (props) => {
    return (
        
                <Row className={classes.ToolbarH}>
                    <header className={classes.Toolbar}>
                        <div className={classes.Logo}>
                            <Logo />
                        </div> 
                        <nav className={classes.DesktopOnly}>
                            <NavigationItems changeLevel={props.changeLevel}/>
                        </nav>
                </header>
                </Row>
        
        
    )
}

export default Toolbar
