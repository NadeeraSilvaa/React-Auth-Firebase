// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA5yitSJBC2iC1sQ_Hhksh9O3VZ2nm_67g",
//   authDomain: "mytest-97bfe.firebaseapp.com",
//   projectId: "mytest-97bfe",
//   storageBucket: "mytest-97bfe.appspot.com",
//   messagingSenderId: "116453358322",
//   appId: "1:116453358322:web:0730698d5d1c29d9686e6b"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
