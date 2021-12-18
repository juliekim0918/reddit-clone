const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/reddit",
  { logging: false }
);
const { STRING, INTEGER } = Sequelize;

const Saved_Post = db.define("saved_post", {
  id: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  thumbnail: {
    type: STRING,
    allowNull: false,
  },
  permalink: {
    type: STRING,
    allowNull: false,
  },
  subreddit: {
    type: STRING,
  },
  ups: {
    type: INTEGER,
    allowNull: false,
  },
});

module.exports = { db, Saved_Post };
