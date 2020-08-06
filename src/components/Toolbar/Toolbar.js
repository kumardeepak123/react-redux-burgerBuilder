import React from 'react';
import classes from './Toolbar.css'
import BurgerLogo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import SideDrawerToggler  from '../Navigation/SideDrawer/SideDrawerToggler/SideDrawerToggler'

const toolBar = (props) => {
    return (  
        <header className={classes.Toolbar}>
            <SideDrawerToggler toggleClick={props.toggleClicked}/>
            <BurgerLogo/>
            <nav className={classes.DesktopOnly}>
            <NavigationItems  />
            </nav>
            
        </header>
    );
}
 
export default toolBar;