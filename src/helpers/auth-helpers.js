import * as firebase from "firebase/app";
import "firebase/auth";

//Authenication functions
export function login(email, password) {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      let errorMessage = error.message;
      alert(errorMessage);
    });
}

export function logout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      console.log("User Signed Out");
    })
    .catch(function(error) {
      alert(error.message);
    });
}
