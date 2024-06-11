// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbZwkW-mRw1zuVnSsfEM6ZER7Ik2D2T34",
  authDomain: "imageuploud-c62d7.firebaseapp.com",
  projectId: "imageuploud-c62d7",
  storageBucket: "imageuploud-c62d7.appspot.com",
  messagingSenderId: "419772011722",
  appId: "1:419772011722:web:18bf1f29afb2b3be0ed033",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
