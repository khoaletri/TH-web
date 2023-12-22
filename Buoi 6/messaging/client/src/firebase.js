import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9fno2bm7dKitzRiNe7ZUaEFpmTLfh-Vg",
  authDomain: "messaging-7fe5e.firebaseapp.com",
  projectId: "messaging-7fe5e",
  storageBucket: "messaging-7fe5e.appspot.com",
  messagingSenderId: "536152531983",
  appId: "1:536152531983:web:87d58755a50b538f31af7a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new firebase.auth.GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
