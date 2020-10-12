import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/FrontPage";
import SelectionPage from "./Pages/SelectionPage";
import Chatbot from "./Pages/Chatbot";
import About from "./Pages/About";
import Register from "./Pages/UserPage/Register";
import SignIn from "./Pages/UserPage/SignIn";
import history from './history';
// import Profile from './Pages/UserPage/Profile';
import TempProfile from "./Profile/ProfileTest";
// import { route } from "../backend/routes/users";

export default class Routes extends Component {
  constructor() {
      super();

      this.handleLogin = this.handleLogin.bind(this);

      this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
       }
  }

  handleLogin(data){
      this.setState({
          loggedInStatus: "LOGGED_IN",
          user: data
      });
  }
  render() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/Selection" component={ SelectionPage } />
                <Route path="/Chatbot" component={ Chatbot } />
                <Route path="/About" component={ About } />
                <Route path="/SignIn" component={ SignIn } />
                <Route path="/Register" component={ Register } />
                {/* <Route path="/Profile" component={ Profile } /> */}
                <Route path="/Profile" component={ TempProfile } />
            </Switch>
        </Router>
    )
  }
  
}