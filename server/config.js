import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCHkFCbUsFso03_CCXRBCCyqA0d3_LnItk",
  authDomain: "vuelogin-6ef3e.firebaseapp.com",
  projectId: "vuelogin-6ef3e",
  storageBucket: "vuelogin-6ef3e.appspot.com",
  messagingSenderId: "645060518477",
  appId: "1:645060518477:web:35fe6a4137d2565137f204"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const db = firebaseApp.firestore();