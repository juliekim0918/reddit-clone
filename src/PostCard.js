import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./Nav";
import { INCREMENT, DECREMENT, updateUps } from "./store/posts";
import { savePost, unsavePost } from "./store/savedPosts";

const PostCard = ({
  selectedCategory,
  post,
  savePost,
  viewSavedPosts,
  unsavePost,
  updateUps,
  savedPosts,
}) => {
  !viewSavedPosts ? (post = post.data) : "";
  return (
    <div className="card">
      <div className="upvote-container">
        <div className="upvotes">
          <button
            aria-label="upvote"
            className="voteButton"
            onClick={() => updateUps(post.id, INCREMENT)}
          >
            <span className="">
              <i className="icon icon-upvote"></i>
            </span>
          </button>
          <p> {post.ups}</p>
          <button
            aria-label="downvote"
            className="voteButton "
            onClick={() => updateUps(post.id, DECREMENT)}
          >
            <span className="">
              <i className="icon icon-downvote"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="card-body">
        <img
          className="thumbnail"
          src={post.thumbnail === "self" ? "" : `${post.thumbnail}`}
        />
        <a
          className="link"
          href={"https://www.reddit.com" + `${post.permalink}`}
          target="_blank"
        >
          <h3>{post.title}</h3>
        </a>
        {viewSavedPosts ? (
          <div className="category-badge">{post.subreddit}</div>
        ) : (
          ""
        )}

        <div className="button-container">
          {!savedPosts.find((savedPost) => savedPost.id === post.id) ? (
            <button onClick={() => savePost(post.id, selectedCategory)}>
              <span>
                <i className="icon icon-save"></i>
              </span>
              <span> Save</span>
            </button>
          ) : (
            <button onClick={() => unsavePost(post.id)}>
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
    savePost: (id, selectedCategory) => {
      dispatch(savePost(id, selectedCategory));
    },
    unsavePost: (id) => {
      dispatch(unsavePost(id));
    },
    updateUps: (id, operator) => {
      dispatch(updateUps(id, operator));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
