import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBk-YWr9vyIcXZZGwV_rWrAg0t83bnpqD8",
    authDomain: "fir-practice-a4739.firebaseapp.com",
    databaseURL: "https://fir-practice-a4739.firebaseio.com",
    projectId: "fir-practice-a4739",
    storageBucket: "fir-practice-a4739.appspot.com",
    messagingSenderId: "895473245175",
    appId: "1:895473245175:web:265a6cd6625145a83e2cf2",
    measurementId: "G-7ZV7TLDNLG"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export default firebase;