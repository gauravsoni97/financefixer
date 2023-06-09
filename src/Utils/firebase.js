// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3J_zhedjrAHxcrylnIKGzrQu1zRn5KzU",
  authDomain: "financefixerauth.firebaseapp.com",
  projectId: "financefixerauth",
  storageBucket: "financefixerauth.appspot.com",
  messagingSenderId: "1030013133298",
  appId: "1:1030013133298:web:6ffae919571b0d098ecb6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider

export {auth, provider}