const router = require('express').Router();
const axios = require('axios');
const { Weather } = require('../db');
require('dotenv').config();

module.exports = router;

router.get('/location/:city', async (req, res, next) => {
  try {
    console.log('hitting location API');
    const data = await Weather.findAll({ where: { city: req.params.city } });

    if (!data.length > 0) {
      const { data } = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%20%09${process.env.API_KEY}%20&q=${req.params.city}&language=en-us&details=false`
      );
      const locationKey = data[0].Key;
      res.send(locationKey);
    } else {
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/weather/:locationKey/:city', async (req, res, next) => {
  try {
    console.log('hitting weather API');
    console.log('city is', req.params.city);
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${req.params.locationKey}?apikey=%20%09${process.env.API_KEY}%20&language=en-us`
    );
    console.log('back end weather data', data);
    const updated = await Weather.create({
      city: req.params.city,
      day1: data.DailyForecasts[0].Day.IconPhrase,
      day2: data.DailyForecasts[1].Day.IconPhrase,
      day3: data.DailyForecasts[2].Day.IconPhrase,
    });
    res.send(updated);
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  console.log('there was an error');
  error.status = 404;
  next(error);
});
