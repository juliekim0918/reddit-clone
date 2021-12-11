import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./Nav";

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <img
        src={post.data.thumbnail === "self" ? "" : `${post.data.thumbnail}`}
      />
      <a
        className="link"
        href={"https://www.reddit.com" + `${post.data.permalink}`}
        target="_blank"
      >
        <h3>{post.data.title}</h3>
      </a>
      <div className="flexSpace">
        <small>Upvotes: {post.data.ups}</small>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(PostCard);
