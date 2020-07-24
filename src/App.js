import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ReadingLibrary from './pages/ReadingLibrary';

function App() {
  return (
    <div className="flex" style={{ background: "#f5f6fd" }}>

    <Sidebar />

      <div className="mx-6 w-full flex flex-col h-screen">

        <Header />

        <Switch>
          {/* 
              TO-DO
              if user is authenticated, show dashboard,
              otherwise show landing page
          */}
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/reading-library" component={ReadingLibrary} />

          
        </Switch>
      </div>
  </div>
    
  );
}

export default App;

