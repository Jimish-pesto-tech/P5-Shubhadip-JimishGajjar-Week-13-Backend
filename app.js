require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Controller
const weatherAPI = require("./routes/weather-api.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/", weatherAPI);

// Routes
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(process.env.PORT, () =>
  console.log(`Server running on port: http://localhost:${process.env.PORT}`)
);
