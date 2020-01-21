const Sequelize = require('sequelize');

const db = require('./database');

const Weather = db.define('weather', {
  city: { type: Sequelize.STRING },
  day1: {
    type: Sequelize.STRING,
  },
  day2: {
    type: Sequelize.STRING,
  },
  day3: {
    type: Sequelize.STRING,
  },
});

module.exports = Weather;
