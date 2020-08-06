import React from 'react';
import classes from './SideDrawerToggler.css'
const sideDrawerToggler = (props) => {


    return (  
        <div className={classes.DrawerToggle} onClick={props.toggleClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
 
export default sideDrawerToggler;