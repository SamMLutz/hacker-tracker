import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/nav";
import Home from "./pages/Home"
import Notepad from "./pages/Notepad"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notepad" component={Notepad} /> 
        </Switch>

      </div>
    </Router>
  );
}

export default App;
