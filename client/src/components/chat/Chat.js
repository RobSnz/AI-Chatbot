import React, { useState } from 'react';
import { connect } from "react-redux";
import { userMessage, sendMessage } from "../../actions/watson";

const Chat = ({ chat, userMessage, sendMessage }) => {

    //Handle users message
    const [message, setMessage] = useState("");

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

            {chat.length === 0 ? "" : chat.map((message) => <div className={message.type}> {message.message} </div>)}

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