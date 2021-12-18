import axios from "axios";
import selectedCategory from "./selectedCategory";

const initialState = [];

const SAVE_POST = "SAVE_POST";
const UNSAVE_POST = "UNSAVE_POST";

const _savePost = (savedPost) => {
  return { type: SAVE_POST, savedPost };
};

const _unsavePost = (id) => {
  return { type: UNSAVE_POST, unsavedPost: id };
};

export const savePost = (id, selectedCategory) => {
  return async (dispatch) => {
    const allPosts = (await axios.get(`/api/${selectedCategory}`)).data.data
      .children;
    const savedPost = allPosts.find((post) => post.data.id === id);
    dispatch(_savePost(savedPost));
  };
};

export const unsavePost = (id) => {
  return async (dispatch) => {
    dispatch(_unsavePost(id));
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST:
      const { savedPost } = action;
      state = [...state, savedPost];
      return state;
    case UNSAVE_POST:
      const { unsavedPost } = action;
      state = [...state].filter((post) => post.data.id !== unsavedPost);
      return state;
    default:
      return state;
  }
};
