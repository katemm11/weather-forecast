const Sequelize = require('sequelize');
const dbName = 'weather-forecast';

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
  operatorsAliases: false,
});
