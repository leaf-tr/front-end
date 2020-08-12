import React, { useState } from 'react'

import * as firebase from 'firebase'

import { authenticateUser } from '../provider/apiRequests'
import { UserContainer } from '../provider/containers'

import Button from '../components/Button'

export default function Login() {
  
  const [error, setErrors] = useState("")
  const container = UserContainer.useContainer()

  const { setUserData, setLoggedIn } = container

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            // access API endpoint to authenticate the user
            // POST api/users
            let data = result
            
            authenticateUser(data)

            setUserData({
              id: data.user.uid,
              data: {
                firstName: data.additionalUserInfo.profile.given_name,
                lastName: data.additionalUserInfo.profile.family_name,
                imgUrl: data.additionalUserInfo.profile.picture
              }
            })
            // let user_db_data = await authenticateUser(data)
            // setUserData(user_db_data)

            setLoggedIn(true)
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