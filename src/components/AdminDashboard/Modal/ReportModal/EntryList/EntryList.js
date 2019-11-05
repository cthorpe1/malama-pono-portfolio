import React from "react";

import classes from "./EntryList.module.css";
const EntryList = props => {
  return (
    <div className={props.showChildren ? classes.Items : classes.Hidden}>
      {props.items.map(item => {
        return <p key={item.id}><strong>{item.time}:</strong>  {item.first} {item.last} checked <strong>{item.type.toUpperCase()}</strong></p>;
      })}
    </div>
  );
};

export default EntryList;
