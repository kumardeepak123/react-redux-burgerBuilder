import React from "react";
import classes from "./buildControls.css";
import BuildControl from "./buildControl/buldControl";
const buildControlsH = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {

  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price:<strong>{props.totalAmount.toFixed(2)}</strong>
      </p>
      {buildControlsH.map((ob ,index) => {
        return (
          <BuildControl
            disabled={props.disableInfor[ob.type]}
            key={index}
            label={ob.label}
            addI={() => props.addItem(ob.type)}
            removeI={() => props.removeItem(ob.type)}
          />
          
        );
      })}
      <button  disabled={!props.orderPurchasable} onClick={props.purchase} className={classes.OrderButton}>ORDER NOW</button>
    </div>
  );
};

export default buildControls;
