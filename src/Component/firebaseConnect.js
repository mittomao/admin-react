import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB2d-1YC4gzGUZPSDIptDYILQPtV--yGPw",
    authDomain: "qlyoto.firebaseapp.com",
    databaseURL: "https://qlyoto.firebaseio.com",
    projectId: "qlyoto",
    storageBucket: "qlyoto.appspot.com",
    messagingSenderId: "744824234784",
    appId: "1:744824234784:web:b19f58cc769687755e2d45",
    measurementId: "G-YB1VFWH5BV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firebaseConnect =  firebase.database().ref('tboto/');