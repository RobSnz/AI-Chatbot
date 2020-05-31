import React, {useState} from 'react'

const Chat = () => {
    
    //Handle users message
    const [message, setMessage] = useState("");

    //function that handles user submission
    const handleClick = async (e) => 
    {
        const code = e.keyCode || e.which;
        
        if(code===13)
        {
            console.log(message);
            setMessage("");
        }

    };

    return(
        <div className="chat">
            <h1>
                AI Helpdesk Chatbot:
            </h1>
            {/* Handle Messages*/}
            <div>Messages go here.</div>
            {/* Input Box */}
            <input id="chatBox" onChange={(e)=>setMessage(e.target.value)}
             onKeyPress={handleClick} 
             value={message}
             ></input>
        </div>
    );
};

export default Chat;