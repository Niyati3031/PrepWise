// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZEng_7GF4dfF92pnUHo9pyPDTPNySfyc",
  authDomain: "prepwise-ae89d.firebaseapp.com",
  projectId: "prepwise-ae89d",
  storageBucket: "prepwise-ae89d.firebasestorage.app",
  messagingSenderId: "1051837099209",
  appId: "1:1051837099209:web:a0d35005a289f04101f118",
  measurementId: "G-HDGJPMLPRS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);