//Initiailize App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

//Firebase Authentication Cdn
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

//FirebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyAR5ni8lQwLU_T-I_UDHBKaitONPHSgc4g",
  authDomain: "olx-project-5e8e3.firebaseapp.com",
  projectId: "olx-project-5e8e3",
  storageBucket: "olx-project-5e8e3.appspot.com",
  messagingSenderId: "575441980787",
  appId: "1:575441980787:web:4980a111ab358a39640906",
  measurementId: "G-PSV9QEE1VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, signInWithPopup, GoogleAuthProvider };

