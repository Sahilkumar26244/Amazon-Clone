// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCNnjgcFYsk3Ybm3W2abXZsnSglb1YQRWA",
    authDomain: "clone-54ce0.firebaseapp.com",
    projectId: "clone-54ce0",
    storageBucket: "clone-54ce0.appspot.com",
    messagingSenderId: "584643023070",
    appId: "1:584643023070:web:d3f22d7e0b6f3620cb724f",
    measurementId: "G-H4BLN37Y4E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};