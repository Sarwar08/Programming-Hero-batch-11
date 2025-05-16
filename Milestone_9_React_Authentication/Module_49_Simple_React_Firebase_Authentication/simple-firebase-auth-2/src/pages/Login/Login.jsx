import React, { useState } from 'react'
import { auth } from '../../firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const Login = () => {

  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked.');

    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result);
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
        setUser(result.user)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successful");
        setUser(null);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div style={{ margin: '20px' }}>
      <h1>This is login page</h1>
      {
        user ? <button onClick={handleSignOut}>Sign Out</button> :
          <>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            <button onClick={handleGithubSignIn}>Sign in with GitHub</button>
          </>
      }

      {
        user && <div>
          <h2>{user.displayName}</h2>
          <h2>{user.email}</h2>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  )
}

export default Login