import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt36HILqL_3TDRbKZ-y6fqPYW0vUc0XXY",
  authDomain: "miniblog-b881f.firebaseapp.com",
  projectId: "miniblog-b881f",
  storageBucket: "miniblog-b881f.appspot.com",
  messagingSenderId: "381542443804",
  appId: "1:381542443804:web:f0d01043e0a2847bc5a8d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };