import React from "react";
import Student from "./Student/Student";
import classes from "./StudentList.module.css";
const StudentList = props => {
  return (
    <div className={classes.StudentListContainer}>
      <table>
        <tbody>
          <tr>
            <th>Student Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Currently Checked In</th>
          </tr>
          {props.students.map(student => {
            return <Student key={student.studentId} student={student} setModalController={props.setModalController} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
