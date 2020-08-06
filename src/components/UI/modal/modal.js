import React from "react";
import classes from "./modal.css";
import BackDrop from "../backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

const modal = (props) => {


  return (
    <Auxiliary>
      <BackDrop show={props.show} removeBackdrop={props.removeB} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

export default modal;
