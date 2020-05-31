import { INPUT_SUCCESS, INPUT_FAIL, SESSION_SUCCESS, SESSION_FAIL, MESSAGE_SUCCESS, MESSAGE_FAIL } from "../actions/types";

const initState = {
    messages: [],
}

export default (state = initState, action) => {
    const { type, payload } = action;
    let { messages } = state;

    // what we do from action status
    switch (type) {
        case INPUT_SUCCESS:
            messages = [...messages, { message: payload, type: "user" }];
            return {
                ...state, messages,
            };
        case INPUT_FAIL:
            return {
                ...state,
            };
        case SESSION_SUCCESS:
            localStorage.setItem("session", payload["session_id"]);
            return {
                ...state,
            };
        case SESSION_FAIL:
            return {
                ...state,
            };
        case MESSAGE_SUCCESS:
            messages = [...messages, { message: payload, type: "bot" }]
            return {
                ...state,
                messages,
            };
        case MESSAGE_FAIL:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    };
};