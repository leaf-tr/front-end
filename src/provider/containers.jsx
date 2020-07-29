/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { createContainer } from 'unstated-next';


function userData() {
  let [loggedIn, setLoggedIn] = useState(false)
  let [userData, setUserData] = useState({});

  return {
    loggedIn, setLoggedIn,
    userData, setUserData 
  }
}

export const UserContainer = createContainer(userData)
