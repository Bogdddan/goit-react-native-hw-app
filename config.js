// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_KYWCUIEfXwk2HS89BfkMUYDKSBmUHJY",
  authDomain: "goit-reactnative-hw-app.firebaseapp.com",
  databaseURL: "https://goit-reactnative-hw-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "goit-reactnative-hw-app",
  storageBucket: "goit-reactnative-hw-app.appspot.com",
  messagingSenderId: "805360234481",
  appId: "1:805360234481:web:d00235f6831448da75de50",
  measurementId: "G-C0D6DHJQLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);