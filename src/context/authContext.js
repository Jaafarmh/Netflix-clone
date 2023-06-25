import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "firebase/auth";
import {collection, addDoc, setDoc, doc} from 'firebase/firestore'

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : ()=> null
});

export const UserProvider =({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    
    const signUp = async(email, password)=>{
        await createUserWithEmailAndPassword(auth, email,password)
        await setDoc(doc(db,'users',email),{
            savedShowes : []
         })
    }
    const logIn=(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=() =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
        })
        return ()=> unsub();
    },[])
    const value={currentUser, signUp, logOut, logIn}

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
    
export const UserAuth=()=> useContext(UserContext)


    