import React, { useState, useEffect } from "react";
import Modal from "./Modal/Modal";
import StudentList from "./StudentList/StudentList";
import Spinner from "../CheckIn/Spinner/Spinner";
import { getAllStudents } from "../../helpers/student-helpers";
import classes from "./AdminDashboard.module.css";
import { getReport } from "../../helpers/report-helper";
const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [modalController, setModalController] = useState({
    show: false,
    content: "",
    data: {}
  });
  useEffect(() => {
    const getStudents = async () => {
      let resultSnapshot = await getAllStudents();
      let studentList = [];
      resultSnapshot.forEach(doc => {
        studentList.push(doc.data());
      });
      setStudents(studentList);
    };
    getStudents();
  }, [modalController]);
  const generateReport = async () => {
    setModalController({
      show: true,
      content: <Spinner />,
      data: { text: "Loading Your Report..." }
    });
    let report = await getReport();
    setModalController({ show: true, content: "REPORT", data: report });
  };

  return (
    <>
      <Modal
        controller={modalController}
        setModalController={setModalController}
      />
      <div className={classes.Dashboard}>
        <div className={classes.DashboardTop}>
          <h1>Admin Dashboard</h1>
          <div className={classes.AdminControls}>
            <button
              onClick={() => setModalController({ show: true, content: "ADD" })}
            >
              Add Student
            </button>
            <button onClick={generateReport}>Load Check In Report</button>
          </div>
        </div>
        <div className={classes.DashboardStudents}>
          <StudentList
            students={students}
            setModalController={setModalController}
          />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
