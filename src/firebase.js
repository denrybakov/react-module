import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDivtbNCYuX1eQC2tSVx6fbQ65Uxfs8plU",
  authDomain: "resultschool-6f456.firebaseapp.com",
  projectId: "resultschool-6f456",
  storageBucket: "resultschool-6f456.appspot.com",
  messagingSenderId: "232313823173",
  appId: "1:232313823173:web:ae520abd80ba006cb2b5ac",
  databaseURL: 'https://resultschool-6f456-default-rtdb.europe-west1.firebasedatabase.app/'
};

// firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
