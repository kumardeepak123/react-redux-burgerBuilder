import React from 'react';
import classes from './buildControl.css'

const buildControl = (props) => {

     
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}> {props.label}</div>
            <button className={classes.Less}  disabled={props.disabled}  onClick={props.removeI}>Less</button>
            
            <button className={classes.More} onClick={props.addI}>More</button>
        </div>
    );
}
 
export default buildControl;