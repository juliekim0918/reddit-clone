import React from "react";
import { connect } from "react-redux";
import { changeSelectedCategory, updatePosts } from "./store";
import axios from "axios";

const Nav = (props) => {
  const { selectedCategory, categories, changeSelectedCategory, updatePosts } =
    props;
  return (
    <nav>
      <h2>Welcome to our Reddit app</h2>
      <div className="links">
        {categories.map((category) => {
          return (
            <div
              className={selectedCategory === category.name ? "selected" : ""}
              key={category.id}
              onClick={() => {
                changeSelectedCategory(category.name);
                updatePosts(category.name);
              }}
            >
              {category.name}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedCategory: async (category) => {
      dispatch(changeSelectedCategory(category));
    },
    updatePosts: async (category) => {
      const { children } = (await axios.get(`/api/${category}`)).data.data;
      dispatch(updatePosts(children));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
