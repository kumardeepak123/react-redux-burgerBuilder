import React from "react";
import Burger from "../burger/burger";
import Button from '../UI/Button/Button'
import classes  from './CheckOutSummary.css'


const checkOutSummary = (props) => {



  return (
    <div  className={classes.CheckOutSummary}>
      <h1>We hope it taste well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger bingredients={props.ingredients} />
      </div>
      <Button  btnType="Danger" btnClicked={props.checkOutCancelled}>Cancel</Button>
      <Button btnType="Success" btnClicked={props.checkOutContinued}>Continue</Button>
     

    </div>
  );
};

export default checkOutSummary;
