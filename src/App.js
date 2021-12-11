import React, { Component } from "react";
import store, { changeSelectedCategory, updatePosts } from "./store";
import { connect } from "react-redux";
import axios from "axios";
import Nav, { mapStateToProps, mapDispatchToProps } from "./Nav";
import Body from "./Body";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { selectedCategory, updatePosts } = this.props;
    updatePosts(selectedCategory);
    console.log("component did in fact mount!");
  }

  render() {
    const {
      categories,
      selectedCategory,
      posts,
      changeSelectedCategory,
      updatePosts,
    } = this.props;
    return (
      <div>
        <Nav />
        <div>
          <Body />
        </div>
      </div>
    );
  }
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(App);
