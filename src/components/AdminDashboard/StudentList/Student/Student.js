import React from "react";
import classes from "./Student.module.css";
const Student = props => {
  const editStudent = async () => {
    props.setModalController({show: true, content: "EDIT", data: props.student});
  };
  const deleteStudent = async () => {
    props.setModalController({ show: true, content: "DELETE", data: props.student });
  };
  return (
    <tr className={classes.Student}>
      <td>{props.student.studentId}</td>
      <td>{props.student.first}</td>
      <td>{props.student.last}</td>
      <td>{props.student.isCheckedIn ? "Yes" : "No"}</td>
      <td>
        <button onClick={editStudent}>Edit Student</button>
      </td>
      <td>
        <button onClick={deleteStudent}>Delete Student</button>
      </td>
    </tr>
  );
};

export default Student;
