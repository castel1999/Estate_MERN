// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-cd88d.firebaseapp.com",
    projectId: "mern-cd88d",
    storageBucket: "mern-cd88d.appspot.com",
    messagingSenderId: "791821111495",
    appId: "1:791821111495:web:105bd4025df4166aaeaee2",
    measurementId: "G-E7W486E5C7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);