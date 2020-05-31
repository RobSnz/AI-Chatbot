import React, { useState, useEffect, useRef } from 'react';
import { connect } from "react-redux";
import { userMessage, sendMessage } from "../../actions/watson";

const Chat = ({ chat, userMessage, sendMessage }) => {

    //Handle users message
    const [message, setMessage] = useState("");
    const endOfMessages = useRef(null);

    const scrollToButton = () => {
        endOfMessages.current.scrollIntoView({behavior : "smooth"});
    }

    useEffect(scrollToButton, [chat]);

    //function that handles user submission
    const handleClick = async (e) => {
        const code = e.keyCode || e.which;

        if (code === 13) {
            console.log(message);
            userMessage(message);
            sendMessage(message);
            setMessage("");
        }
    };

    return (
        <div className="chat">
            <h1>AI Helpdesk Chatbot:</h1>
            <div 
                class = "historyContainer">
                {chat.length === 0 ? "" 
                : chat.map((message) => <div className={message.type}> {message.message} </div>)}

                <div ref = {endOfMessages}></div>
            </div>
            <input
                id="chatBox"
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleClick}
                value={message}
            ></input>
        </div>
    );
};

const mapStatetoProps = (state) => ({
    chat: state.watson.messages,
});

export default connect(mapStatetoProps, { userMessage, sendMessage })(Chat);