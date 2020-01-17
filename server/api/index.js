const router = require('express').Router();
const axios = require('axios');

module.exports = router;

router.get('/location', async (req, res, next) => {
  try {
    const { data } = await axios.get(
      'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%20%09nfahuby7dlIchUVaRIqotVQbYg3nnzRx%20&q=Chicago&language=en-us&details=false'
    );
    res.send(data[0].Key);
  } catch (error) {
    next(error);
  }
});

router.get('/weather/:locationKey', async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${req.params.locationKey}?apikey=%20%09nfahuby7dlIchUVaRIqotVQbYg3nnzRx%20&language=en-us`
    );
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
