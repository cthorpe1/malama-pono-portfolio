import React from "react";
import { editStudentDetails } from "../../../../helpers/student-helpers";
import classes from "./EditStudentModal.module.css";
const EditStudentModal = props => {
  const handleSubmit = async e => {
    e.preventDefault();
    props.setIsLoading(true);
    let updatedStudent = {};
    let newValues = {};
    newValues.first = e.target.elements[0].value;
    newValues.last = e.target.elements[1].value;
    for (let key in newValues) {
      if (newValues[key] !== "") {
        updatedStudent[key] = newValues[key];
      }
    }
    try {
      const data = {
        studentId: props.data.studentId,
        data: updatedStudent
      };
      editStudentDetails(data).then(() => {
        props.setIsLoading(false);
        props.setModalController({
          show: true,
          content: "Student details were updated successfully!",
          data: {}
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.EditStudentModal}>
      <h2>
        Edit Details For {props.data.first} {props.data.last}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.Group}>
          <label>New First Name: </label>
          <input type="text" id="updatedfirst" name="updatedfirst" />
        </div>
        <div className={classes.Group}>
          <label>New Last Name: </label>
          <input type="text" id="updatedlast" name="updatedlast" />
        </div>
        <button>Confirm Edits</button>
      </form>
    </div>
  );
};

export default EditStudentModal;
