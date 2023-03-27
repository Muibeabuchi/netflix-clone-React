// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXB4yeP7E5mK9tu7DxuBPMd-w8-84PHrM",
  authDomain: "chiki-netflix-clone.firebaseapp.com",
  projectId: "chiki-netflix-clone",
  storageBucket: "chiki-netflix-clone.appspot.com",
  messagingSenderId: "28556752040",
  appId: "1:28556752040:web:8c19be708d823c68383e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const db = getFirestore(app);