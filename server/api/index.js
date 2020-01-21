const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

module.exports = router;

router.get('/location/:city', async (req, res, next) => {
  try {
    console.log('hitting location API');
    console.log(req.params.city);

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%20%09${process.env.API_KEY}%20&q=${req.params.city}&language=en-us&details=false`
    );

    console.log('location data sent');
    console.log(data[0].key);
    res.send(data[0].Key);
  } catch (error) {
    next(error);
  }
});

router.get('/weather/:locationKey', async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${req.params.locationKey}?apikey=%20%09${process.env.API_KEY}%20&language=en-us`
    );

    console.log('weather data back end');
    console.log(data);
    res.send(data);
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
