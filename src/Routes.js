import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Home from "./Pages/FrontPage";
import SelectionPage from "./Pages/SelectionPage";
import Chatbot from "./Pages/Chatbot";
import Login from "./Pages/UserPage/Login";
import Register from "./Pages/UserPage/Register"
import Profile from './Pages/UserPage/Profile';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
// import { route } from "../backend/routes/users";

export default class Routes extends Component {
  render() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={ Home } />                
                <PrivateRoute path="/Chatbot" component={ Chatbot } />
                <PrivateRoute path="/Selection" component={ SelectionPage } />                
                <PrivateRoute path="/Profile" component={ Profile } />
                <UnPrivateRoute path="/Login" component={ Login } />
                <UnPrivateRoute path="/Register" component={ Register } />

            </Switch>
        </Router>
    )
  }
}