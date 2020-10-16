const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://snx1043:AIChatBot@cluster0.kpkv8.gcp.mongodb.net/AIChatbotDB?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const conversationsRouter = require('./routes/conversations');
const usersRouter = require('./routes/users');
const ratingsRouter = require('./routes/ratings');

app.use('/conversations', conversationsRouter);
app.use('/users', usersRouter);
app.use('/ratings', ratingsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});