// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG8wuDnucNgDhiR9RGCyTp6M63LmhjceQ",
  authDomain: "cineai-d12eb.firebaseapp.com",
  projectId: "cineai-d12eb",
  storageBucket: "cineai-d12eb.appspot.com",
  messagingSenderId: "392337597174",
  appId: "1:392337597174:web:0ab85c3cf2cb402d3702d7",
  measurementId: "G-8LSQF748X3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
