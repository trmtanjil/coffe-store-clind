// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNj5OjHqexjWgG52KCwNNiZJTzrYHU5qg",
  authDomain: "coffe-store-app-b5fca.firebaseapp.com",
  projectId: "coffe-store-app-b5fca",
  storageBucket: "coffe-store-app-b5fca.firebasestorage.app",
  messagingSenderId: "208763580494",
  appId: "1:208763580494:web:19d7f78a353e337a77131f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);