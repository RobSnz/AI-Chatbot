import React from "react";
import {Switch, Route} from "react-router-dom";
import FrontPage from "../../Front Page/FrontPage";
import App from "../../App";
import FemaleChatPage from "../../female-chat-app";
import AboutPage from "../../About";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/AI-Chatbot" component={FrontPage} />
            <Route exact path="/chat" component={App} />
            <Route exact path="/chat-female" component={FemaleChatPage} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    )
}

export default Router;