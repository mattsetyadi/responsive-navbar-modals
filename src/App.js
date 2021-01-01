import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Community from "./components/pages/Community";
import Developer from "./components/pages/Developer";
import Forums from "./components/pages/Forums";
import GroupChat from "./components/pages/GroupChat";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";
import Store from "./components/pages/Store";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/community" exact component={Community} />
        <Route path="/developer" exact component={Developer} />
        <Route path="/forums" exact component={Forums} />
        <Route path="/group-chat" exact component={GroupChat} />
        <Route path="/log-in" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/store" exact component={Store} />
      </Switch>
    </Router>
  );
}

export default App;
