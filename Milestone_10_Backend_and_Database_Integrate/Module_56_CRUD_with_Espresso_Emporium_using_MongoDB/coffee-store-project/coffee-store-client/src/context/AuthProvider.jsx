import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'
// import { useState } from 'react'

const AuthProvider = ({ children }) => {

    // const [user, setUser] = useState();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        createUser,
        userSignIn,
    };

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider