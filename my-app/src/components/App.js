import React from "react"; 
import { Route, Switch, useState } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar.js";
import Tasks from "./components/Tasks.js"; 
import Home from "./components/Home"
import SupportNetwork from "./components/SupportNetwork"
import { CATEGORIES } from "./data";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/SupportNetwork">
          <SupportNetwork />
        </Route>
        <Route exact path="/Tasks">
          <Tasks />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
