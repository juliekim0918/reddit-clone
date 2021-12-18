import React from "react";
import { connect } from "react-redux";
// import { updatePosts } from "./store";
import { changeSelectedCategory } from "./store/selectedCategory";
import { updatePosts } from "./store/posts";
import axios from "axios";

const Nav = (props) => {
  const { selectedCategory, categories, changeSelectedCategory, updatePosts } =
    props;
  return (
    <nav>
      <a href="/">
        <img
          className="logo"
          src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png"
          alt=""
        />
      </a>

      <select
        name="categories-dropdown"
        onChange={() => {
          changeSelectedCategory(event.target.value);
          updatePosts(event.target.value);
        }}
        defaultValue={selectedCategory}
      >
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedCategory: (category) => {
      dispatch(changeSelectedCategory(category));
    },
    updatePosts: (category) => {
      dispatch(updatePosts(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
