import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./Nav";
import PostCard from "./PostCard";
import { toggleView } from "./store";

const Body = ({
  selectedCategory,
  posts,
  savedPosts,
  viewSavedPosts,
  toggleView,
}) => {
  const postsToDisplay = viewSavedPosts ? savedPosts : posts;
  return (
    <div className="body-container">
      <h1 className="centerItem">{selectedCategory}</h1>
      <button onClick={() => toggleView()} className={`all-posts-btn`}>
        <span className={viewSavedPosts ? "hide" : ""}>
          <i className="icon icon-all"></i>
        </span>
        <span> {viewSavedPosts ? "Go back" : "See all saved posts"}</span>
      </button>
      {postsToDisplay.map((post) => {
        return <PostCard key={post.data.id} post={post} />;
      })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleView: () => {
      dispatch(toggleView());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
