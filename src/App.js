import React, { createContext, useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import ReadingLibrary from './pages/ReadingLibrary';

import * as firebase from 'firebase'
import firebaseConfig from './firebase.config'

firebase.initializeApp(firebaseConfig)

export const AuthContext = createContext(null)

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  function readSession() {
    const user = window.sessionStorage.getItem(
			`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
		);
    if (user) {
      setLoggedIn(true)
    }
  }

  useEffect(() => {
    readSession()
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      { isLoggedIn ? (
        <div className="flex" style={{ background: "#f5f6fd" }}>
          <Sidebar />
          <div className="mx-6 w-full flex flex-col h-screen">
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/reading-library" component={ReadingLibrary} />
            </Switch>
          </div>
        </div>
      ) : (
          <>
            <Route exact path="/" component={Landing} />
            <Redirect to="/" />
          </>
        )
      }
    </AuthContext.Provider>
    
  );
}

export default App;

