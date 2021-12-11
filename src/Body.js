import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./Nav";
import PostCard from "./PostCard";

const Body = (props) => {
  const { selectedCategory, posts } = props;
  return (
    <div>
      <h1 className="centerItem">{selectedCategory}</h1>
      {posts.map((post) => {
        return <PostCard key={post.data.id} post={post} />;
      })}
    </div>
  );
};

export default connect(mapStateToProps)(Body);
