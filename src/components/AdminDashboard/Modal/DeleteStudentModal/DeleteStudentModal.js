import React from "react";
import { deleteStudent } from "../../../../helpers/student-helpers";
import classes from "./DeleteStudentModal.module.css";
const DeleteStudentModal = props => {
  const confirmDelete = async () => {
    props.setIsLoading(true);
    try {
      deleteStudent(props.data.studentId).then(() => {
        props.setIsLoading(false);
        props.setModalController({
          show: true,
          content: "Student was deleted successfully!",
          data: ""
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const cancelDelete = async () => {
    props.setModalController({ show: false, content: "", data: "" });
  };
  return (
    <div className={classes.DeleteStudentModal}>
      <h2>Are You Sure You Want To Delete This Student?</h2>
      <div className={classes.Buttons}>
        <button onClick={confirmDelete}>Yes</button>
        <button onClick={cancelDelete}>No</button>
      </div>
    </div>
  );
};

export default DeleteStudentModal;
