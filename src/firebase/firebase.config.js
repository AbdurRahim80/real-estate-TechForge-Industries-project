// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxLijxCdnffDOj4mwj3O7VRWPYbDSF3J0",
  authDomain: "techforge-industries-70f82.firebaseapp.com",
  projectId: "techforge-industries-70f82",
  storageBucket: "techforge-industries-70f82.appspot.com",
  messagingSenderId: "721724204851",
  appId: "1:721724204851:web:87d220d7dcbaf1a1638046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;