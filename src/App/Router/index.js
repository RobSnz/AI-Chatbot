import React from "react";
import {Switch, Route} from "react-router-dom";
import FrontPage from "../../Front Page/FrontPage";
import App from "../../App";
import FemaleChatPage from "../../female-app";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/AI-Chatbot" component={FrontPage} />
            <Route exact path="/chat" component={App} />
            <Route exact path="/chat-female" component={FemaleChatPage} />
        </Switch>
    )
}

export default Router;