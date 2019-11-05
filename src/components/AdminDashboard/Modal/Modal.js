import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "./Backdrop/Backdrop";
import Spinner from "../../CheckIn/Spinner/Spinner";
import AddStudentModal from "./AddStudentModal/AddStudentModal";
import EditStudentModal from "./EditStudentModal/EditStudentModal";
import DeleteStudentModal from "./DeleteStudentModal/DeleteStudentModal";
import ReportModal from "./ReportModal/ReportModal";

import classes from "./Modal.module.css";
const Modal = props => {
  const [isLoading, setIsLoading] = useState(false);
  let modalContent;
  const goBack = () => {
    props.setModalController({ show: false, content: "", data: "" });
  };
  if (isLoading) {
    modalContent = (
      <div className={classes.Loading}>
        <h2>Working on it...</h2>
        <Spinner />
      </div>
    );
  } else {
    switch (props.controller.content) {
      case "ADD":
        modalContent = (
          <AddStudentModal
            setModalController={props.setModalController}
            setIsLoading={setIsLoading}
          />
        );
        break;
      case "EDIT":
        modalContent = (
          <EditStudentModal
            setModalController={props.setModalController}
            data={props.controller.data}
            setIsLoading={setIsLoading}
          />
        );
        break;
      case "DELETE":
        modalContent = (
          <DeleteStudentModal
            setModalController={props.setModalController}
            data={props.controller.data}
            setIsLoading={setIsLoading}
          />
        );
        break;
      case "REPORT":
        modalContent = (
          <ReportModal
            setModalController={props.setModalController}
            data={props.controller.data}
            setIsLoading={setIsLoading}
          />
        );
        break;
      default:
        modalContent = (
          <div className={classes.Message}>
            {props.controller.data.text ? <h2>{props.controller.data.text}</h2> : null}
            <h3>{props.controller.content}</h3>
            <button onClick={goBack}>Back to Admin Console</button>
          </div>
        );
    }
  }
  return (
    <div className={props.controller.show ? classes.Active : classes.Hidden}>
      <Backdrop show="true" />
      <div className={classes.ModalContainer}>
        <div className={classes.BackArrowContainer}>
          <Link to="/admin" className={classes.goBackLink} onClick={goBack}>
            <i className="fa fa-arrow-left" />
          </Link>
        </div>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;
