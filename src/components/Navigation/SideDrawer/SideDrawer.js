import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import BackDrop from '../../UI/backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'

const sideDrawer = (props) => { 

 let attachClasses =[ classes.SideDrawer , classes.Open]
 if(!props.Open)
  {
      attachClasses= [classes.SideDrawer ,classes.Close]
  }



  return (
    <Auxiliary>
      <BackDrop show={props.Open} removeBackdrop={props.backDropRemove} />
    <div className={attachClasses.join(' ')}>
      <div style={{marginTop:'10px' ,marginBottom:'20px' ,height:'13%'}}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Auxiliary>
  );
};

export default sideDrawer;
