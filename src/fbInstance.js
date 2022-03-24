// Import the functions you need from the SDKs you need

// initializeApp: Initialization firebase app.
import { initializeApp } from "firebase/app";

// getAuth: Return Auth instance linked to firebase app
// We can get uid, email or photoURL etc by using "getAuth"
import { getAuth } from "firebase/auth";

// getFirestore: Return the firestore instance associated with the provided firebase app
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Firebase　Initialization
const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);
export const dbService = getFirestore(app);
console.log(dbService);

// Get a Firestorage instance
export const storageService = getStorage(app);
