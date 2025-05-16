import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase.init'

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('onauthchanged', currentUser);
            setuser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[]);

    const userInfo = {
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
        googleSignIn
    }

    return (
        <AuthContext value={userInfo}>
            { children }
        </AuthContext>
    )
}

export default AuthProvider