import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
//CRUD functions for student objects
export async function getAllStudents() {
  return firebase
    .firestore()
    .collection("students")
    .get();
}

export function getOneStudent(id) {
  return firebase
    .firestore()
    .collection("students")
    .where("studentId", "==", id)
    .get();
}

export function updateStudentCheckInStatus(docId, newCheckInStatus) {
  firebase
    .firestore()
    .collection("students")
    .doc(docId)
    .set(
      {
        isCheckedIn: newCheckInStatus
      },
      { merge: true }
    );
}

export async function addStudent(newStudent) {
  return getOneStudent(newStudent.studentId).then(snap => {
    if (snap.empty) {
      return firebase
        .firestore()
        .collection("students")
        .add({
          first: newStudent.first,
          last: newStudent.last,
          studentId: newStudent.studentId,
          isCheckedIn: false
        });
    } else {
      return {
        message: `${newStudent.first} ${newStudent.last} has already been added...`
      };
    }
  });
}

export async function editStudentDetails(data) {
  return firebase
    .firestore()
    .collection("students")
    .where("studentId", "==", data.studentId)
    .limit(1)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        if (doc.exists) {
          return firebase
            .firestore()
            .collection("students")
            .doc(doc.id)
            .set(data.data, { merge: true });
        } else {
        }
      });
    });
}

export async function deleteStudent(id) {
  return firebase
    .firestore()
    .collection("students")
    .where("studentId", "==", id)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        if (doc.exists) {
          return firebase
            .firestore()
            .collection("students")
            .doc(doc.id)
            .delete();
        }
      });
    });
}

// export async function seedDbWithStudents() {
//   students.forEach(student => {
//     return firebase
//       .firestore()
//       .collection("students")
//       .add({
//         first: student.first,
//         last: student.last,
//         studentId: student.studentId,
//         isCheckedIn: false
//       });
//   });
// }
