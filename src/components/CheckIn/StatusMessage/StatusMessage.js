import React from "react";
import ReturnToHomeTimer from "../ReturnToHomeTimer/ReturnToHomeTimer";
import classes from "./StatusMessage.module.css";
const StatusMessage = props => {
  const clickHandler = () => {
    props.setMessage("");
  };
  return (
    <div className={classes.StatusMessage}>
      <h3>{props.message}</h3>
      <button onClick={clickHandler}>Return To Home</button>
      <ReturnToHomeTimer setMessage={props.setMessage} />
    </div>
  );
};

export default StatusMessage;
