require("dotenv").config();

exports.cureentWeatherService = async (search) => {
  try {
    let response = await fetch(
      `${process.env.API_URL}current.json?key=${process.env.API_KEY}&q=${search}&aqi=yes`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    return json({ error: error.message });
  }
};

exports.forcastService = async (search, days) => {
  try {
    let response = await fetch(
      `${process.env.API_URL}forecast.json?key=${process.env.API_KEY}&q=${search}&days=${days}&aqi=yes`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    return json({ error: error.message });
  }
};
