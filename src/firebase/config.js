// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAv4kivUoMfXxO8yfyrXprVgOUtkzeagss',
  authDomain: 'portfolio-test-app-d4190.firebaseapp.com',
  projectId: 'portfolio-test-app-d4190',
  storageBucket: 'portfolio-test-app-d4190.firebasestorage.app',
  messagingSenderId: '830148522409',
  appId: '1:830148522409:web:2bcbd353fd60256460d4b8',
  measurementId: 'G-8PQK9D9QER',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
