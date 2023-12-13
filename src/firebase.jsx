// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdmcuf9sxSQ199BeN1pMx7A3AjfaPlxd8",
  authDomain: "ttw-project-665f1.firebaseapp.com",
  projectId: "ttw-project-665f1",
  storageBucket: "ttw-project-665f1.appspot.com",
  messagingSenderId: "1060162762249",
  appId: "1:1060162762249:web:c287fc3d61687d4abe2ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
