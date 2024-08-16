// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOPz6FSyfdszM9-V3jDPiyQcJAog2Tpv4",
  authDomain: "react-project-course-3a371.firebaseapp.com",
  projectId: "react-project-course-3a371",
  storageBucket: "react-project-course-3a371.appspot.com",
  messagingSenderId: "886798408586",
  appId: "1:886798408586:web:70b72f74757b0374a88673",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
