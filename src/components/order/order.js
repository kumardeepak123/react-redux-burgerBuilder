import React from "react";
import classes from "./order.css";

const order = (props) => {
  const orderArr = [];

  for (let igname in props.ingredients) {
    orderArr.push({
      ingredientName: igname,
      price: props.ingredients[igname],
    });
  }

  const orderfetch = orderArr.map((ob) => {
    return (
      <span key={ob.ingredientName}style={{
          textTransform:'capitalize',
          display:'inline-block',
          border:'1px  solid #ccc',
          margin:'0 10px' ,
          padding: ' 5px  8px'
          }}>
        {ob.ingredientName}({ob.price})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients : {orderfetch}</p>
      <p>
        Price :<strong>{props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
