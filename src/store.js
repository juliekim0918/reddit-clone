import { connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import loggerMiddleware, { logger } from "redux-logger";
import axios from "axios";

// const posts = await axios.get('')

const initialState = {
  categories: [
    { id: 0, name: "popular" },
    { id: 1, name: "suggestmeabook" },
    { id: 2, name: "Foodforthought" },
    { id: 3, name: "SkincareAddicts" },
    { id: 4, name: "YouShouldKnow" },
  ],
  selectedCategory: "suggestmeabook",
  posts: [],
};

const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const UPDATE_POSTS = "UPDATE_POSTS";

export const changeSelectedCategory = (category) => {
  return { type: CHANGE_CATEGORY, category };
};

export const updatePosts = (posts) => {
  return { type: UPDATE_POSTS, posts };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      const { category } = action;
      state = { ...state, selectedCategory: category };
      return state;
    case UPDATE_POSTS:
      const { posts } = action;
      state = { ...state, posts };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
