// import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { getEntriesByTimestamp } from "./entry-helpers";

export async function getReport() {
  let data = {};
  let response;
  try {
    getEntriesByTimestamp().then(querySnapshot => {
      if (querySnapshot.empty) {
        response = "No records to show...";
        return response;
      }
      querySnapshot.forEach(doc => {
        let document = doc.data();
        let date = document.timestamp.toDate();
        let options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "Pacific/Honolulu"
        };
        let timeOptions = {
          timeZone: "Pacific/Honolulu",
          hour12: "true"
        };

        let dateString = date.toLocaleDateString("en-us", options);
        let time = date.toLocaleTimeString(undefined, timeOptions);
        let dataObject = {
          first: document.first,
          last: document.last,
          type: document.type,
          time: time,
          id: doc.id
        };
        if (data[dateString]) {
          data[dateString].push(dataObject);
        } else {
          data[dateString] = [];
          data[dateString].push(dataObject);
        }
      });
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}
