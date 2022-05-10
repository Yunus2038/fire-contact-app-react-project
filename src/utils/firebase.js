// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxtmM8nzWpP14eegGK5zOlY0fYDsfK7j8",
  authDomain: "fire-contact-react-project.firebaseapp.com",
  databaseURL: "https://fire-contact-react-project-default-rtdb.firebaseio.com",
  projectId: "fire-contact-react-project",
  storageBucket: "fire-contact-react-project.appspot.com",
  messagingSenderId: "520243748138",
  appId: "1:520243748138:web:529ddbda146505a53d5253"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;