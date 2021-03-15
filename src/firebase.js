import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCLemafyv82BSJoWrH-1HOq2CCJ9TFDfxU",
  authDomain: "todoappdr.firebaseapp.com",
  databaseURL:
    "https://todoappdr-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoappdr",
  storageBucket: "todoappdr.appspot.com",
  messagingSenderId: "1009464903758",
  appId: "1:1009464903758:web:7fdd45ba5f9757591b1b1f",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;
