import React, { useState, useContext } from 'react'

import * as firebase from 'firebase'
import { AuthContext } from '../App' 

import Button from '../components/Button'

export default function Login() {
  
  const [error, setErrors] = useState("")

  const Auth = useContext(AuthContext)

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log(result)
            // history.push('/reports')
            Auth.setLoggedIn(true)
          })
          .catch(e => setErrors(e.message))
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <Button color="orange" onClick={() => signInWithGoogle()} outline>
      
        <img
          className="w-6"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="logo"
        />
        <span className="ml-2">
          Login With Google
        </span>
        
      </Button>
    </div>
  )
}