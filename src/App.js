import React, { createContext, useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import ReadingLibrary from './pages/ReadingLibrary'
import ItemProfile from './pages/ItemProfile'

import * as firebase from 'firebase'
import firebaseConfig from './firebase.config'

import { UserContainer } from './provider/containers'

firebase.initializeApp(firebaseConfig)

function App() {

  const container = UserContainer.useContainer()

  const {
    loggedIn, setLoggedIn,
    userData, setUserData
  } = container

  function readSession() {
    const user = window.sessionStorage.getItem(
			`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
		);
    if (user) {
      setLoggedIn(true)
      const json_data = JSON.parse(user)
      
      setUserData({
        id: json_data.uid,
        data: {
          firstName: json_data.displayName.split(" ")[0],
          lastName: json_data.displayName.split(" ")[1],
          imgUrl: json_data.photoURL
        }
      })
    }
  }

  useEffect(() => {
    readSession()
  }, [])

  return (
    <>
      { loggedIn ? (
        <div className="flex" style={{ height: '120vh' }}>
          <Sidebar />
          <div className="mx-6 w-full flex flex-col h-screen">
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard}>
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/dashboard" component={Dashboard} />
              <Route exact path="/reading-library" component={ReadingLibrary} />
              <Route path="/reading-library/:id" render={({ match }) => (<ItemProfile id={match.params.id} />)} />
            </Switch>
          </div>
        </div>
      ) : (
          <>
            <Route exact path="/" component={Landing} />
            {/* <Redirect to="/" /> */}
          </>
        )
      }
    </>
  )
}

export default App

