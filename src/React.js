import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyDRSNxhbAmEcnFWBDF9VtzYbA1V0FmRjx0",
  authDomain: "sachinmahajan-cbcce.firebaseapp.com",
  projectId: "sachinmahajan-cbcce",
  storageBucket: "sachinmahajan-cbcce.firebasestorage.app",
  messagingSenderId: "146261052015",
  appId: "1:146261052015:web:7f95bbc92e6c36a5f65b9a"
};



const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);