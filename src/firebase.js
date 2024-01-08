// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX66xlDv97GCUr3j4cOGz-Qjc7mwqtnLc",
  authDomain: "photofolio-app-cefdc.firebaseapp.com",
  projectId: "photofolio-app-cefdc",
  storageBucket: "photofolio-app-cefdc.appspot.com",
  messagingSenderId: "535148321540",
  appId: "1:535148321540:web:c8895592409778853d8e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
