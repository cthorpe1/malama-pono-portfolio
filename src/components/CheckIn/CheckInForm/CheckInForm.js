import React, { useState } from "react";
import { handleCheckInOrCheckOut } from "../../../helpers/entry-helpers";
import classes from "./CheckInForm.module.css";
const CheckInForm = props => {
  const [value, setValue] = useState("");
  const handleValueChange = e => {
    setValue(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    props.setIsLoading(true);
    let studentId = e.target[0].value;
    let response = await handleCheckInOrCheckOut(studentId);
    setTimeout(() => {
      props.setMessage(response.message);
      props.setIsLoading(false);
    }, 800);
  };
  return (
    <form className={classes.CheckInForm} onSubmit={e => handleFormSubmit(e)}>
      <input value={value} onChange={e => handleValueChange(e)} required />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CheckInForm;
