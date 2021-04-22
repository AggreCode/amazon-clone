import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwgqjSQv6SzcjdCUHF4GdjC10SRE9WXUY",
  authDomain: "e-clone-250a8.firebaseapp.com",
  projectId: "e-clone-250a8",
  storageBucket: "e-clone-250a8.appspot.com",
  messagingSenderId: "97334281602",
  appId: "1:97334281602:web:2204bae9162d15acbb7b9b",
  measurementId: "G-GRE592XWVV"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
