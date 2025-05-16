import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('google sign in clicked');

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        console.log('github sign in clicked');

        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out completed');
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <h2>Please Log in</h2>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button onClick={handleSignOut}>Sign Out</button>
            <div>
                <br />
                {
                    user ? <button onClick={handleSignOut}>Sign Out</button> :
                        <>
                            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                            <button onClick={handleGithubSignIn}>Sign in with Github</button>
                        </>
                }
            </div>
            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    )
}

export default Login