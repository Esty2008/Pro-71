import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyDosyT2WpVt5XbmI973-jYHfNGi0mikBGo",
    authDomain: "eride-app-16ee9.firebaseapp.com",
    projectId: "eride-app-16ee9",
    storageBucket: "eride-app-16ee9.appspot.com",
    messagingSenderId: "765214511149",
    appId: "1:765214511149:web:398bde683b9e2e7fc4a8a4"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


