// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyALuugPnsrMYx1yd5XlBBiksyQDUh4QpIU",
  authDomain: "sivakasi-pattasu.firebaseapp.com",
  databaseURL: "https://sivakasi-pattasu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sivakasi-pattasu",
  storageBucket: "sivakasi-pattasu.firebasestorage.app",
  messagingSenderId: "845385008418",
  appId: "1:845385008418:web:91e23ffd820fff1dc7917b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database
const db = firebase.database();

console.log("Firebase Connected Successfully");