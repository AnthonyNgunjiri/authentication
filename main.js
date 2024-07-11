// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO6SZ1FXyu2VqmN0WgrfoRESCDzdoLkvM",
  authDomain: "fir-authentication-7ccbb.firebaseapp.com",
  projectId: "fir-authentication-7ccbb",
  storageBucket: "fir-authentication-7ccbb.appspot.com",
  messagingSenderId: "1002683721435",
  appId: "1:1002683721435:web:e4e9017ef6aa8e05540efe",
  measurementId: "G-EVPGB7GRJ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
console.log(user)
window.location.href = "../sign.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
