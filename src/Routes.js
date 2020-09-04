import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./FrontPage/FrontPage";
import SelectionPage from "./Pages/SelectionPage";
import MaleChatBot from "./Pages/male-chat";
import FemaleChatBot from "./Pages/female-chat";
import About from "./Pages/About";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Selection" component={SelectionPage} />
                    <Route path="/Male-Chat" component={MaleChatBot} />
                    <Route path="/Female-Chat" component={FemaleChatBot} />
                    <Route path="/About" component={About} />
                </Switch>
            </Router>
        )
    }
}