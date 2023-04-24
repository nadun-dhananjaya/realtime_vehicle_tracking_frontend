import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const FIREBASE_API_KEY = process.env['REACT_APP_FIREBASE_API_KEY']

const firebaseConfig = {

    apiKey: FIREBASE_API_KEY,
    authDomain: "real-time-vehicle-tracki-62ecc.firebaseapp.com",
    projectId: "real-time-vehicle-tracki-62ecc",
    storageBucket: "real-time-vehicle-tracki-62ecc.appspot.com",
    messagingSenderId: "132350944633",
    appId: "1:132350944633:web:b537913e8f57b4f5ce3ba8",
    measurementId: "G-RFW79PHRS9"
};
// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed

