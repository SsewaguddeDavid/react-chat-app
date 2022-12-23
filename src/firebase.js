// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN88EHWtN8NGD5Xu9S0bh-57l3ogJDEpg",
  authDomain: "chat-app-4743a.firebaseapp.com",
  projectId: "chat-app-4743a",
  storageBucket: "chat-app-4743a.appspot.com",
  messagingSenderId: "926906055382",
  appId: "1:926906055382:web:5ec8c838cf81f173246777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)