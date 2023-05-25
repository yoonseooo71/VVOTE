import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import {getFirestore,doc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth() ;
const db = getFirestore(app) ; 
export const signInWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};  

export const setLoginData = async (user: User) => {
  try {
    await setDoc(doc(db, "users",user.uid), {
      email: user.email, 
      name: user.displayName,
      photo: user.photoURL
    });
    console.log("setData");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}