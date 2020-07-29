/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { createContainer } from 'unstated-next';


function userAuth() {
  let [loggedIn, setLoggedIn] = useState(false)
  // let [userId, setUserId] = useState(null);

  return {
    loggedIn, setLoggedIn,
    userId, setUserId 
  }
}

export const User = createContainer(userAuth)
