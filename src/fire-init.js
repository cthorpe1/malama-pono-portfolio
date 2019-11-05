import * as firebase from "firebase/app";
import "firebase/auth";

let config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "malamapono-portfolio.firebaseapp.com",
  databaseURL: "https://malamapono-portfolio.firebaseio.com",
  projectId: "malamapono-portfolio",
  storageBucket: "malamapono-portfolio.appspot.com",
  messagingSenderId: "751109748416",
  appId: "1:751109748416:web:ac03618ee6777b27db5f25"
};
const app = firebase.initializeApp(config);

export default app;