import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCh0AkLrI8ua22rE1amz11M5uH1QWJeW3Y",
  authDomain: "tallernucleo3-46d02.firebaseapp.com",
  databaseURL: "https://tallernucleo3-46d02-default-rtdb.firebaseio.com",
  projectId: "tallernucleo3-46d02",
  storageBucket: "tallernucleo3-46d02.firebasestorage.app",
  messagingSenderId: "803949552783",
  appId: "1:803949552783:web:147980c67449e1dad1fcfa"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)


