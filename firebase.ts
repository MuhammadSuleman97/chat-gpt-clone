import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAc7n2SWqSVnlMxf4O0tID3QlUcVIVoQOM",
    authDomain: "chat-gpt-app-2b37e.firebaseapp.com",
    projectId: "chat-gpt-app-2b37e",
    storageBucket: "chat-gpt-app-2b37e.appspot.com",
    messagingSenderId: "612966100734",
    appId: "1:612966100734:web:75ef3328e3aad3a0bebfaf"
  };
  
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
