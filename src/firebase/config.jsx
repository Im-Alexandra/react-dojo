import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP1TYk9GsOX7PLokrDr_-Ysd0d0ddSTG0",
  authDomain: "thedojosite-e063b.firebaseapp.com",
  projectId: "thedojosite-e063b",
  storageBucket: "thedojosite-e063b.appspot.com",
  messagingSenderId: "935183054626",
  appId: "1:935183054626:web:ef1f21801a5633acec977b",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//setup timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
