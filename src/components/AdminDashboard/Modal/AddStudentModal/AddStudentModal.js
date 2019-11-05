import React from "react";
import { addStudent } from "../../../../helpers/student-helpers";
import classes from "./AddStudentModal.module.css";
const AddStudentModal = props => {
  const handleSubmit = async e => {
    e.preventDefault();
    props.setIsLoading(true);
    const { newId, first, last } = e.target.elements;
    const newStudent = {
      studentId: newId.value,
      first: first.value,
      last: last.value,
    };
    try {
      let content;
      addStudent(newStudent).then(result => {
        if (result.message) {
          content = result.message;
        } else {
          content = `${newStudent.first} ${newStudent.last} was added successfully!`;
        }
        props.setIsLoading(false);
        props.setModalController({
          show: true,
          content: content,
          data: {}
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.AddStudentModal}>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.Group}>
          <label htmlFor="newId">Student Id: </label>
          <input
            type="text"
            placeholder="Enter unique id..."
            id="newId"
            name="newId"
            required
            minLength="4"
            maxLength="4"
          />
        </div>
        <div className={classes.Group}>
          <label htmlFor="first">First Name: </label>
          <input
            type="text"
            placeholder="Enter first name..."
            id="first"
            name="first"
            required
            maxLength="25"
          />
        </div>
        <div className={classes.Group}>
          <label htmlFor="last">Last Name: </label>
          <input
            type="text"
            placeholder="Enter last name..."
            id="last"
            name="last"
            required
            maxLength="25"
          />
        </div>
        <button>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentModal;
