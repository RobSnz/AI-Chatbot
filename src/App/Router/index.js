import React from "react";
import {Switch, Route} from "react-router-dom";
import FrontPage from "../../Front Page/FrontPage";
import App from "../../App";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/AI-Chatbot" component={FrontPage} />
            <Route exact path="/chat" component={App} />
        </Switch>
    )
}

export default Router;