const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

module.exports = app;

const createApp = () => {
  //logging middleware
  app.use(morgan('dev'));

  //body-parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //api routes
  app.use('/api', require('./api'));

  //static middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  //sends index.html

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  //error handling endware
};

const startListening = () => {
  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
  });
};

const bootApp = async () => {
  await createApp();
  await startListening();
};

bootApp();
