// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-523d1.firebaseapp.com",
  projectId: "blog-523d1",
  storageBucket: "blog-523d1.appspot.com",
  messagingSenderId: "818948713892",
  appId: "1:818948713892:web:6b64af85fbc64063d2a531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default  app ;