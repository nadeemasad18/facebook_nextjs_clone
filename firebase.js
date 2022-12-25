import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: "facebook-nextjs-clone-49b51.firebaseapp.com",
  projectId: "facebook-nextjs-clone-49b51",
  storageBucket: "facebook-nextjs-clone-49b51.appspot.com",
  messagingSenderId: "401966621030",
  appId: process.env.FIREBASE_APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const storage = app.storage();

export { db, storage };
