import axios from "axios";

const initialState = [];

const UPDATE_POSTS = "UPDATE_POSTS";
const UPDATE_UPS = "UPDATE_UPS";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const _updatePosts = (posts) => {
  return { type: UPDATE_POSTS, posts };
};

export const updatePosts = (selectedCategory) => {
  return async (dispatch) => {
    const posts = (await axios.get(`/api/${selectedCategory}`)).data.data
      .children;
    dispatch(_updatePosts(posts));
  };
};

export const updateUps = (votedPost, operator) => {
  return {
    type: UPDATE_UPS,
    votedPost,
    operator,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      const { posts } = action;
      return posts;
    case UPDATE_UPS:
      const { votedPost, operator } = action;
      const newPosts = state.map((post) => {
        if (post.data.id === votedPost) {
          operator === INCREMENT ? post.data.ups++ : post.data.ups--;
        }
        return post;
      });
      return newPosts;
    default:
      return state;
  }
};
