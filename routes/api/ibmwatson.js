const express = require("express");
const router = express.Router();
const AV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth")

const assistant = new AV2({
    version: "2020-04-01",
    authenticator: new IamAuthenticator({
        apikey: process.env.W_A_APIKEY,
    }),
    url: process.env.W_A_URL,
});

router.get("/session", async (req, res) => {
    try {
        const session = await assistant.createSession({
            assistantId: process.env.W_A_ID,
        });

        res.json(session["result"]);

    } catch (error) {
        res.send("Error processing request.");
        console.log(error);
    }
});

router.post("/message", async (req, res) => {

    payload = {
        assistantId: process.env.W_A_ID,
        sessionId: req.headers.session_id,
        input: {
            message_type: "text",
            text: req.body.input,
        },
    };

    try {
        const message = await assistant.message(payload);
        res.json(message["result"]);

    } catch (error) {
        res.send("Error processing request.");
        console.log(error);
    }
});

module.exports = router;