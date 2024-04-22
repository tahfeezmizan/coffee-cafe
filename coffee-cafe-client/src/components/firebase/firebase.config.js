// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNyt0b7Gc6bhqRCPSRUJ-5n4580Nl6f9w",
    authDomain: "coffee-cafe-3d32a.firebaseapp.com",
    projectId: "coffee-cafe-3d32a",
    storageBucket: "coffee-cafe-3d32a.appspot.com",
    messagingSenderId: "823621640360",
    appId: "1:823621640360:web:7fbc7b27c67a8b8b4ca29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 