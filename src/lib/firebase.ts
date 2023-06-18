import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import {getFirestore,doc, setDoc, getDoc, query, collection, orderBy, limit, getDocs, startAfter, DocumentData, Query} from 'firebase/firestore'
import { IpostData } from "../routes/PostWrite";

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


export const getLoginData =async (uid:string) => {
  const docRef = doc(db,"users",uid) ; 
  const docSnap = await getDoc(docRef) ; 
  if (docSnap.exists()) {
    return docSnap.data(); 
  } else {
    console.log("No such document!");
    return undefined ; 
  }
}

export const setLoginData = async (user: User) => {
  try {
    await setDoc(doc(db, "users",user.uid), {
      email: user.email, 
      name: user.displayName,
      photo: user.photoURL
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function setPostData(data:IpostData) {
  try {
    await setDoc(doc(db, "posts",data.id), {
      ...data
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

type Idata = {
  docSnap: null | DocumentData,
  nextThunk: null | Query,
  error : boolean
}

export async function getPostData(currentQuery:any) {
  const data:Idata = {
    docSnap: null,
    nextThunk: null,
    error : false
  }; 
  try {
    const docQuery = currentQuery === null ? query(collection(db, "posts"), orderBy("date","desc"), limit(1)) : currentQuery;
    const docSnap = await getDocs(docQuery);
  
    const lastVisible = docSnap.docs[docSnap.docs.length-1];
  
    const nextThunk = query(collection(db, "posts"),
      orderBy("date","desc"),
      startAfter(lastVisible),
      limit(1));
    
    data.docSnap = docSnap ; 
    data.nextThunk = nextThunk; 
    data.error = false ; 
  } catch(err) {
    data.docSnap = null ; 
    data.nextThunk = null; 
    data.error = true ; 
  }
  return data; 
}