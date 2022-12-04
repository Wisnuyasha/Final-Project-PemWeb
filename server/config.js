import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrTEi_2gQOwalsdfohki2eDu9oYisRrRA",
    authDomain: "finalproject-39ef0.firebaseapp.com",
    projectId: "finalproject-39ef0",
    storageBucket: "finalproject-39ef0.appspot.com",
    messagingSenderId: "685269585631",
    appId: "1:685269585631:web:f7b35e21113f6b143c636a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const db = firebaseApp.firestore();