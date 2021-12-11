const { db, Post } = require("./db");
const express = require("express");
const volleyball = require("volleyball");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", require("./api"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const init = async () => {
  try {
    await db.sync({ force: true });
    app.listen(PORT, () =>
      console.log(`
      
        Youre connected!

        Go to http://localhost:${PORT}/


      `)
    );
  } catch (e) {
    console.log(e);
  }
};

init();

module.exports = app;
