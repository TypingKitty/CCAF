// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut} from 'firebase/auth'
import { get, getDatabase,ref,set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAWlN4Lvm2bV96o42vBaERKHtgixXPa9AM",
  authDomain: "collab-4dc5f.firebaseapp.com",
  projectId: "collab-4dc5f",
  storageBucket: "collab-4dc5f.appspot.com",
  messagingSenderId: "684382923579",
  appId: "1:684382923579:web:71f97d1acfda2f385ee51e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const database=getDatabase(app)

export const setData=(docName,docData)=>{
  const user=GetCurrentUser()
  set(ref(database,"users/"+docName),{
    data:docData,
    
  })
  .then(()=>{
    console.log("ok")
  })
  .catch((error)=>{
    console.log("Error: ",error)
  })
}

export const getData=(docName)=>{
  
  return get(ref(database,"users/"+docName))

}

export const GoogleSignIn  = ()=>{
  const provider = new GoogleAuthProvider()
  return signInWithPopup(auth,provider)
}

export const LogOut = ()=>{
  return signOut(auth)
}


export const CreateNewUser = (email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
     
}

export const SignInWithEmail = (email,password)=>{
  console.log("loging in")
  return signInWithEmailAndPassword(auth, email, password)
}

export const GetCurrentUser = ()=>{
  return auth.currentUser;
}