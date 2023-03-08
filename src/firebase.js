/** @format */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvma0uexGAfrr6CUYBmR_S795xc6ezCWk",
  authDomain: "dashboard-5491a.firebaseapp.com",
  projectId: "dashboard-5491a",
  storageBucket: "dashboard-5491a.appspot.com",
  messagingSenderId: "927532210990",
  appId: "1:927532210990:web:6180562bf498944bcdf8bf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
