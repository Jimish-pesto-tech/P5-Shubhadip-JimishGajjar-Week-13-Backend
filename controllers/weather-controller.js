const {
  cureentWeatherService,
  forcastService,
} = require("../services/weather-services.js");

exports.getCureentWeather = async (req, res) => {
  try {
    let search = req.params.search;
    let weatherData = await cureentWeatherService(search);

    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getForcast = async (req, res) => {
  try {
    let search = req.params.search;
    let days = req.params.days;

    let weatherData = await forcastService(search, days);
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
