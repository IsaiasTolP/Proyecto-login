// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwu-64cUkeyMw2q3MOTe3bRjBzPFjIG_k',
  authDomain: 'login-register-5f5e1.firebaseapp.com',
  projectId: 'login-register-5f5e1',
  storageBucket: 'login-register-5f5e1.firebasestorage.app',
  messagingSenderId: '287537429765',
  appId: '1:287537429765:web:2ffd1d2f367ae406484b6c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signOut };
