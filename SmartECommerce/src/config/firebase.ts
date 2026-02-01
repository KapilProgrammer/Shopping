import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Optionally import the services that you want to use
// 
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// 

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBf0G131vc7IOsf-s3UBBryBRKJG2y9nc4",
  authDomain: "e-commerceempo.firebaseapp.com",
  projectId: "e-commerceempo",
  storageBucket: "e-commerceempo.firebasestorage.app",
  messagingSenderId: "1095047179956",
  appId: "1:1095047179956:web:29d669da2ab6faa9caf1e1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
