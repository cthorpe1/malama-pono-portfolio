import React from "react";
import ReportHeader from "./ReportHeader/ReportHeader";
import classes from "./ReportModal.module.css";

const ReportModal = props => {
  let entries = Object.entries(props.data);
  return (
    <div className={classes.ReportModal}>
      <h2>Check In/Check Out Report</h2>
      {entries.map(entry => {
        return (
          <div key={entry[0]}>
            <ReportHeader entry={entry}/>
          </div >
        )
      })}
    </div>
  );
};

export default ReportModal;
