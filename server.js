const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get('env') !== 'production';

require('dotenv').config();

if(dev) {
  app.disable('x-powered-by');
  app.use(morgan('common'));
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}
const server = createServer(app);

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true 
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const conversationsRouter = require('./backend/routes/conversations');
const usersRouter = require('./backend/routes/users');
const ratingsRouter = require('./backend/routes/ratings')

app.use('/conversations', conversationsRouter);
app.use('/users', usersRouter);
app.use('/ratings', ratingsRouter);

server.listen(PORT, err => {
  if(err) throw err;

  console.log('Server started');
});