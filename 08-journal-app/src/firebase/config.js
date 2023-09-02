// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmq42-1vnEHc0A3JBeL3fciipJ6ftBW8A",
    authDomain: "react-cursos-650d5.firebaseapp.com",
    projectId: "react-cursos-650d5",
    storageBucket: "react-cursos-650d5.appspot.com",
    messagingSenderId: "134714080844",
    appId: "1:134714080844:web:54e48f44f53fcc5061fee9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);