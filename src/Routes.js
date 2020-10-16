import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Home from "./Pages/FrontPage/FrontPage";
import SelectionPage from "./Pages/SelectionPage";
import Chatbot from "./Pages/Chatbot";
import Register from "./Pages/UserPage/Register";
import Login from "./Pages/UserPage/Login";
import Profile from './Pages/UserPage/Profile';
import TestProfile from "./Profile/ProfileTest";
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import About from "./Pages/About";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/About" exact component={ TestProfile } />                
              <PrivateRoute path="/Chatbot" exact component={ Chatbot } />
              <PrivateRoute path="/Selection" exact component={ SelectionPage } />                
              <PrivateRoute path="/Profile" exact component={ Profile } />             
              <UnPrivateRoute path="/Login" exact component={ Login } />
              <UnPrivateRoute path="/Register" exact component={ Register } />
          </Switch>
      </Router>
    )
  }
}