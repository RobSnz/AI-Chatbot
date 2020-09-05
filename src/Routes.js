import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/FrontPage";
import SelectionPage from "./Pages/SelectionPage";
import Chatbot from "./Pages/Chatbot";
import About from "./Pages/About";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/Selection" component={ SelectionPage } />
                    <Route path="/Chatbot" component={ Chatbot } />
                    <Route path="/About" component={ About } />
                </Switch>
            </Router>
        )
    }
}