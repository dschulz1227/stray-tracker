const firebase = require("firebase")
const storage = require('@google-cloud/storage')

const firebaseConfig = {
    apiKey: "AIzaSyDyYDTWxL2WY2xutYnFlvPE3n85uGKWNi0",
    authDomain: "stray-locator.firebaseapp.com",
    databaseURL: "https://stray-locator.firebaseio.com",
    projectId: "stray-locator",
    storageBucket: "stray-locator.appspot.com",
    messagingSenderId: "910951965080",
    appId: "1:910951965080:web:e6180d51be7893e4124bed",
    measurementId: "G-WY6QRV9SVP"
  };
  
firebase.initializeApp(firebaseConfig);

export  {
  storage, firebaseConfig as default
}