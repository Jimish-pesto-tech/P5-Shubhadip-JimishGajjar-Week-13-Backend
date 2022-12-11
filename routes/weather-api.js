const express = require("express");
const {
  getCureentWeather,
  getForcast,
} = require("./../controllers/weather-controller.js");

const router = express.Router();

router.route("/forcast/cureent/:search").get(getCureentWeather);
router.route("/forcast/:search/:days").get(getForcast);

router.all("*").get((req, res) => {
  res.send(`Page not found`);
});

module.exports = router;
