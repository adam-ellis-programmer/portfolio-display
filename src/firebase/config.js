// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA6WlO9VCyBKJlwux7uhnca74xXZZ9LNBY',
  authDomain: 'my-portfolio-app-90783.firebaseapp.com',
  projectId: 'my-portfolio-app-90783',
  storageBucket: 'my-portfolio-app-90783.firebasestorage.app',
  messagingSenderId: '235188726691',
  appId: '1:235188726691:web:1f631b20160528e8e04816',
  measurementId: 'G-ZRYMBNJ88Q',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app)
