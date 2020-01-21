const { db, Weather } = require('./server/db');

const seed = async () => {
  console.log('syncing db and running seed');
  await db.sync({ force: true });

  return Promise.all([
    Weather.create({
      city: 'Chicago',
      day1: 'cold',
      day2: 'warm',
      day3: 'hot',
    }),
    Weather.create({
      city: 'Paris',
      day1: 'cold',
      day2: 'warm',
      day3: 'hot',
    }),
    Weather.create({
      city: 'Boston',
      day1: 'cold',
      day2: 'warm',
      day3: 'hot',
    }),
    Weather.create({
      city: 'London',
      day1: 'cold',
      day2: 'warm',
      day3: 'hot',
    }),
  ])
    .then(console.log('seed has run'))
    .catch(error => console.log(error));
};

seed();

module.exports = seed;
