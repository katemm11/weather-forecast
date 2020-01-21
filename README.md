## Weather Forecast

## Start

Here are the steps to get the weather forecast web application running on your computer.

1. Open up the terminal on your computer.
2. Clone this repo by typing `git clone https://github.com/katemm11/weather-forecast.git` on the command line.
3. Open up the file with a code editor of your choice.
4. Go to `https://developer.accuweather.com/apis` to create an AccuWeather developer account. You will need to create a new app at `https://developer.accuweather.com/user/me/apps`. Once you have created a new app, you will be able to see your API key.
5. Create a file in the root directory of the project called `.env`.
6. Add your API key to the file in the format `API_KEY={your APi key here}`.
7. Create a PostgreSQl database on your computer called `weather-forecast`.
8. Run `npm install`.
9. Run `npm start-dev`.
10. View the website at `localhost:8080`. Alternatively, you can exit the process to get out of development mode and run `npm start` and go to `localhost:8080`. You should now be able to see the Weather Forecast site.
