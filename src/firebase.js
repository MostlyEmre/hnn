import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseui from "firebaseui";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB94Gw18KjsCw1VFmPwMZdZrxGV4O24RwM",
  authDomain: "hnnetwork-a2abe.firebaseapp.com",
  projectId: "hnnetwork-a2abe",
  storageBucket: "hnnetwork-a2abe.appspot.com",
  messagingSenderId: "625185324825",
  appId: "1:625185324825:web:97e6bd1b2d1d97d7298f88",
  measurementId: "G-GXE9EMEJ46",
};

firebase.initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.
export const auth = firebase.auth();
export const firestore = firebase.firestore();
