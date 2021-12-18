import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loggerMiddleware, { logger } from "redux-logger";
import selectedCategory from "./selectedCategory";
import posts from "./posts";
import categories from "./categories";
import savedPosts from "./savedPosts";
import viewSavedPosts from "./viewSavedPosts";

const reducer = combineReducers({
  categories,
  selectedCategory,
  posts,
  savedPosts,
  viewSavedPosts,
});

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
