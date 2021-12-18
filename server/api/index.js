const axios = require("axios");
const express = require("express");
const app = express.Router();
const { db, Saved_Post } = require("../db");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/saved-posts", async (req, res, next) => {
  try {
    const allSavedPosts = await Saved_Post.findAll();
    res.send(allSavedPosts);
  } catch (e) {
    console.error(e);
  }
});

app.get("/:category", async (req, res, next) => {
  const dataSource = (
    await axios.get(`https://www.reddit.com/r/${req.params.category}/.json`)
  ).data;
  res.send(dataSource);
});

app.post("/:postId", async (req, res, next) => {
  try {
    const { id, title, thumbnail, permalink, subreddit_name_prefixed, ups } =
      req.body.data;
    const savedPost = {
      id,
      title,
      thumbnail,
      permalink,
      subreddit: subreddit_name_prefixed,
      ups,
    };
    const post = await Saved_Post.create(savedPost);
    res.send(post).status(204);
  } catch (e) {
    console.error(e);
  }
});

app.delete("/:postId", async (req, res) => {
  const deletedPost = await Saved_Post.findByPk(req.params.postId);
  await deletedPost.destroy();
  res.sendStatus(204);
});

module.exports = app;
