/* import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDnXICDjJ3PXeATMFXnkjzkFMrS6Fm6Wfw",
    authDomain: "estore-reactjs.firebaseapp.com",
    projectId: "estore-reactjs",
    storageBucket: "estore-reactjs.appspot.com",
    messagingSenderId: "603577369002",
    appId: "1:603577369002:web:eaff0dc4e836c67c76abd3"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
} */


// Initialize Firebase
/* app.initializeApp(firebaseConfig);
const db = app.firestore();
export { db }; */

import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDnXICDjJ3PXeATMFXnkjzkFMrS6Fm6Wfw",
    authDomain: "estore-reactjs.firebaseapp.com",
    projectId: "estore-reactjs",
    storageBucket: "estore-reactjs.appspot.com",
    messagingSenderId: "603577369002",
    appId: "1:603577369002:web:eaff0dc4e836c67c76abd3"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}