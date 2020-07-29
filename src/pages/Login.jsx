import React, { useState, useContext } from 'react'

import * as firebase from 'firebase'
import { AuthContext } from '../App' 

import { authenticateUser } from '../provider/apiRequests'

import Button from '../components/Button'

export default function Login() {
  
  const [error, setErrors] = useState("")
  const [userData, setUserData] = useState({})

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
            // access API endpoint to authenticate users
            // POST api/users/:id
            setUserData(result.additionalUserInfo.profile)
            console.log(userData)
            /* 

            family_name = userData.family_name
            given_name = userData.given_name
            id = userData.id
            picture = userData.picture


            */
            // additionalUserInfo.profile.family_name
            //               .given_name
            //               .id
            //               .picture
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