// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgKhczhgZQyoxYqmOlPxwhwVcsD9pnOj4",
  authDomain: "beproject-b59cd.firebaseapp.com",
  databaseURL: "https://beproject-b59cd-default-rtdb.firebaseio.com",
  projectId: "beproject-b59cd",
  storageBucket: "beproject-b59cd.appspot.com",
  messagingSenderId: "289179887060",
  appId: "1:289179887060:web:e09143037857e09e4ae241",
  measurementId: "G-GHTZL3G60S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

export default app ;
