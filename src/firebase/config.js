import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCI-nEZkktADMac0KAcWt-5Z_IZepPXCY0",
  authDomain: "goju-app.firebaseapp.com",
  projectId: "goju-app",
  storageBucket: "goju-app.firebasestorage.app",
  messagingSenderId: "895978713587",
  appId: "1:895978713587:web:757857ada16f2f9fdc2286"
};

const app = initializeApp(firebaseConfig)

const fsAuth = getAuth()

export { fsAuth }



