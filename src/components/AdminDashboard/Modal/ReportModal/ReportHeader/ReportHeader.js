import React, { useState } from 'react';
import EntryList from "../EntryList/EntryList";
import classes from "./ReportHeader.module.css";
const ReportHeader = (props) => {
    const [showChildren, setShowChildren] = useState(false);

    const toggleShowChildren = () => {
      setShowChildren(!showChildren);
    }
    return (
        <>
            <h4 className={classes.Header} onClick={toggleShowChildren}>{props.entry[0]}</h4>
            <EntryList items={props.entry[1]} showChildren={showChildren} />
        </>
    )
};

export default ReportHeader;