// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbOkBjUkBn80EoVWuiYFYmbKy6MdSX_Jw",
  authDomain: "auth-firebase-b3ab2.firebaseapp.com",
  projectId: "auth-firebase-b3ab2",
  storageBucket: "auth-firebase-b3ab2.appspot.com",
  messagingSenderId: "1084454312819",
  appId: "1:1084454312819:web:f6ac2418331d1212c0c306",
  measurementId: "G-14PB6LKY8P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
