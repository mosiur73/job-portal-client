import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInuser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }


    useEffect( ()=>{
        const unScribe=onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('user login',currentUser)
            setLoading(false)
            
        })
        return ()=>{
            unScribe()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        singInuser,
        signOutUser,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;