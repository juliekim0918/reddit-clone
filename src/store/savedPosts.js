import axios from "axios";
import selectedCategory from "./selectedCategory";

const initialState = [];

const FETCH_SAVED_POSTS = "FETCH_SAVED_POSTS";

const _fetchSavedPosts = (savedPosts) => {
  return { type: FETCH_SAVED_POSTS, savedPosts };
};

export const savePost = (id, selectedCategory) => {
  return async (dispatch) => {
    const allPosts = (await axios.get(`/api/${selectedCategory}`)).data.data
      .children;
    const savedPost = allPosts.find((post) => post.data.id === id);
    await axios.post(`/api/${id}`, savedPost);
    const savedPosts = (await axios.get("/api/saved-posts")).data;
    dispatch(_fetchSavedPosts(savedPosts));
  };
};

export const unsavePost = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/${id}`);
    const savedPosts = (await axios.get("/api/saved-posts")).data;
    dispatch(_fetchSavedPosts(savedPosts));
  };
};

export const fetchSavedPosts = () => {
  return async (dispatch) => {
    const savedPosts = (await axios.get("/api/saved-posts")).data;
    dispatch(_fetchSavedPosts(savedPosts));
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAVED_POSTS:
      const { savedPosts } = action;
      return savedPosts;
    default:
      return state;
  }
};
