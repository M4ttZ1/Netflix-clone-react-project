// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmaTWf3mwxfw43rdMA-YJ6AzFBBTty-DQ",
  authDomain: "netflix-clone-project-69fe0.firebaseapp.com",
  projectId: "netflix-clone-project-69fe0",
  storageBucket: "netflix-clone-project-69fe0.appspot.com",
  messagingSenderId: "387533932583",
  appId: "1:387533932583:web:161df99c9a71d96b2d2602"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }