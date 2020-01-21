const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('./database');

// const anHourAgo = new Date(Date.now() - 60);

const Weather = db.define(
  'weather',
  {
    city: { type: Sequelize.STRING, allowNull: false },
    day1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    day2: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    day3: {
      type: Sequelize.STRING,
      allowNul: false,
    },
  },
  {}
);

// Weather.addHook('beforeSync', async function() {
//   await Weather.destroy({
//     where: {
//       createdAt: {
//         [Op.lte]: anHourAgo,
//       },
//     },
//   });
//   console.log(anHourAgo);
//   console.log('before sync hook');
// });

module.exports = Weather;
