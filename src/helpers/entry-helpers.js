import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { getOneStudent, updateStudentCheckInStatus } from "./student-helpers";

//Check in and check out CRUD functions
export function addEntryToCollection(entry) {
  return firebase
    .firestore()
    .collection("entries")
    .add(entry);
}
export async function handleCheckInOrCheckOut(id) {
  let student;
  let docId;
  let newCheckInStatus;
  let response = {};
  let studentSnapshot = await getOneStudent(id);
  if (studentSnapshot.empty) {
    response.message = "That student doesn't exist...";
    return response;
  }
  studentSnapshot.forEach(async doc => {
    student = doc.data();
    docId = doc.id;
    newCheckInStatus = !student.isCheckedIn;
    updateStudentCheckInStatus(docId, newCheckInStatus);
    let entry = {
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      type: newCheckInStatus ? "in" : "out",
      first: student.first,
      last: student.last
    };
    await addEntryToCollection(entry);
  });
  let type = newCheckInStatus ? "in" : "out";
  response.message =
    student.first +
    " " +
    student.last +
    " was checked " +
    type +
    " successfully!";
  return response;
}

export async function getEntriesByTimestamp() {
  return firebase.firestore().collection('entries').orderBy("timestamp").get();
}

export async function seedDbWithEntries() {
  
}
