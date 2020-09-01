import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import FrontPage from "../../Front Page/FrontPage";
import App from "../../App";
import FemaleChatPage from "../../female-chat-app";
import AboutPage from "../../About";
import SelectionPage from '../../SelectionPage';
import {AnimatePresence} from "framer-motion";

function Router(){
const location = useLocation()
// const Router = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location = {location} key = {location.pathname}>
                <Route exact path="/AI-Chatbot" component={FrontPage} />
                <Route exact path="/SelectionPage" component={SelectionPage} />
                <Route exact path="/chat" component={App} />
                <Route exact path="/chat-female" component={FemaleChatPage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </AnimatePresence>
    )
}
//}

export default Router;