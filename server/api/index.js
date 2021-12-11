const axios = require("axios");
const app = require("express").Router();

app.get("/:category", async (req, res, next) => {
  const dataSource = (
    await axios.get(`https://www.reddit.com/r/${req.params.category}/.json`)
  ).data;
  res.send(dataSource);
});

module.exports = app;
