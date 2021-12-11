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
    { id: 3, name: "hiphopheads" },
    { id: 4, name: "YouShouldKnow" },
  ],
  selectedCategory: "suggestmeabook",
  posts: [],
  savedPosts: [],
  viewSavedPosts: false,
};

const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const UPDATE_POSTS = "UPDATE_POSTS";
const SAVE_POST = "SAVE_POST";
const UNSAVE_POST = "UNSAVE_POST";
const TOGGLE_VIEW = "TOGGLE_VIEW";
const UPDATE_UPS = "UPDATE_UPS";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const changeSelectedCategory = (category) => {
  return { type: CHANGE_CATEGORY, category };
};

export const updatePosts = (posts) => {
  return { type: UPDATE_POSTS, posts };
};

export const savePost = (id) => {
  return { type: SAVE_POST, savedPost: id };
};

export const unsavePost = (id) => {
  return { type: UNSAVE_POST, unsavedPost: id };
};

export const toggleView = () => {
  return { type: TOGGLE_VIEW };
};

export const updateUps = (votedPost, operator) => {
  return {
    type: UPDATE_UPS,
    votedPost,
    operator,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      const { category } = action;
      state = { ...state, selectedCategory: category };
      return state;
    case UPDATE_POSTS:
      const { posts } = action;
      return { ...state, posts };
    case SAVE_POST:
      const { savedPost } = action;
      state = { ...state };
      const postToSave = state.posts.find((post) => post.data.id === savedPost);
      state.savedPosts = [...state.savedPosts, postToSave];
      return state;
    case UNSAVE_POST:
      const { unsavedPost } = action;
      const newSavedPosts = state.savedPosts.filter(
        (post) => post.data.id !== unsavedPost
      );
      return { ...state, savedPosts: newSavedPosts };
    case TOGGLE_VIEW:
      return { ...state, viewSavedPosts: !state.viewSavedPosts };
    case UPDATE_UPS:
      const { votedPost, operator } = action;
      const newPosts = state.posts.map((post) => {
        if (post.data.id === votedPost) {
          operator === INCREMENT ? post.data.ups++ : post.data.ups--;
        }
        return post;
      });
      return { ...state, posts: newPosts };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
