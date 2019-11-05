import React, { useState } from "react";
import Hero from "../../assets/images/mphero.png";
import Spinner from "./Spinner/Spinner";
import CheckInForm from "./CheckInForm/CheckInForm";
import StatusMessage from "./StatusMessage/StatusMessage";
import classes from "./CheckIn.module.css";
const CheckIn = props => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let componentToRender;
  if (isLoading) {
    componentToRender = (
      <>
        <h2>Looking up your child...</h2>
        <Spinner />;
      </>
    );
  } else if (message) {
    componentToRender = (
      <StatusMessage message={message} setMessage={setMessage} />
    );
  } else {
    componentToRender = (
      <>
        <h1>Welcome!</h1>
        <h3>Enter Your Child's Id Number Below</h3>
        <p>If Checked Out, you will be checked in</p>
        <p>If Checked In, you will be checked out</p>
        <CheckInForm
          setMessage={setMessage}
          setIsLoading={setIsLoading}
          checkedInStudents={props.checkedInStudents}
          setCheckedInStudents={props.setCheckedInStudents}
        />
      </>
    );
  }
  return (
    <div className={classes.CheckIn}>
      <div className={classes.Hero}>
        <img src={Hero} alt="Hero" />
      </div>
      <div className={classes.CheckInContainer}>{componentToRender}</div>
    </div>
  );
};

export default CheckIn;
