import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDN_qjpO9BVytJjgS-vKw1NV7mA9R0qbvI",
  authDomain: "vape-store-6693e.firebaseapp.com",
  projectId: "vape-store-6693e",
  storageBucket: "vape-store-6693e.firebasestorage.app",
  messagingSenderId: "376900026178",
  appId: "1:376900026178:web:d7f421b3ef5315482952db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)

