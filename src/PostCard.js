import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./Nav";
import { savePost, unsavePost } from "./store";

const PostCard = ({
  post,
  savePost,
  viewSavedPosts,
  unsavePost,
  savedPosts,
}) => {
  return (
    <div className="card">
      <div className="upvote-container">
        <div className="upvotes">
          <button aria-label="upvote" className="voteButton ">
            <span className="">
              <i className="icon icon-upvote"></i>
            </span>
          </button>
          <p> {post.data.ups}</p>
          <button aria-label="downvote" className="voteButton ">
            <span className="">
              <i className="icon icon-downvote"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="card-body">
        <img
          className="thumbnail"
          src={post.data.thumbnail === "self" ? "" : `${post.data.thumbnail}`}
        />
        <a
          className="link"
          href={"https://www.reddit.com" + `${post.data.permalink}`}
          target="_blank"
        >
          <h3>{post.data.title}</h3>
        </a>
        {viewSavedPosts ? (
          <div className="category-badge">
            {post.data.subreddit_name_prefixed}
          </div>
        ) : (
          ""
        )}

        <div className="button-container">
          {!savedPosts.find(
            (savedPost) => savedPost.data.id === post.data.id
          ) ? (
            <button onClick={() => savePost(post.data.id)}>
              <span>
                <i className="icon icon-save"></i>
              </span>
              <span> Save</span>
            </button>
          ) : (
            <button onClick={() => unsavePost(post.data.id)}>
              <span>
                <i className="icon icon-saved"></i>
              </span>
              <span> Unsave</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
// you can do something like
// const mapStateToProps = (state, otherProps) => {
// return {
// post: otherProps.post
// }
//}

const mapDispatchToProps = (dispatch) => {
  return {
    savePost: (id) => {
      dispatch(savePost(id));
    },
    unsavePost: (id) => {
      dispatch(unsavePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
