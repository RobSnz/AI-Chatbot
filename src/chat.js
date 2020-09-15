import { ApiAiClient } from 'api-ai-javascript';
import { applyMiddleware, createStore } from 'redux';
import storeDB from "./StoreDB";

const client = new ApiAiClient({ accessToken: "8dd1b597e3fe4d95a08f8e69d96545c6" });
const ON_MESSAGE = "ON_MESSAGE";

const initState = ({ text: 'Welcome to the AI Helpdesk Chatbot.', sender: 'chatbot' });
const initState2 = ({ text: 'Please enter a query and I will try to help you!', sender: 'chatbot' }); 

export const sendMessage = (text, sender = 'user') => ({
    type: ON_MESSAGE,
    messageData: {
        text, 
        sender
    }
});

const messageMiddleware = () => next => action => {
    next(action);

    if(action.type === ON_MESSAGE) {
        const{ text } = action.messageData;

        client.textRequest(text).then(onSuccess)
        
        function onSuccess(response) {
            const{ result: { fulfillment } } = response;
            next(sendMessage(fulfillment.speech, 'chatbot'));
            storeDB("AI", fulfillment.speech);
        }
    }
};

const handleNewMessage = (state = [initState, initState2], action) => {
    switch(action.type) {
        case ON_MESSAGE:
            return[...state, action.messageData];
        default:
            return state;
    }
};

export const store = createStore(handleNewMessage, applyMiddleware(messageMiddleware));