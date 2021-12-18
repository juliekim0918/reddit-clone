import React, { Component } from "react";
import { connect } from "react-redux";
import Nav, { mapStateToProps, mapDispatchToProps } from "./Nav";
import Body from "./Body";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { selectedCategory, updatePosts, fetchSavedPosts } = this.props;
    updatePosts(selectedCategory);
    fetchSavedPosts();
    console.log("component did in fact mount!");
  }

  render() {
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
