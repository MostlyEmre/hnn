import React from "react";
import { Link } from "react-router-dom";

function PostCard({ postData }) {
  return (
    <div className="post-wrapper">
      <p>{postData.objectID}</p>
      <h2>
        <a href={postData.url} target="_blank" rel="noreferrer">
          {postData.title}
        </a>
      </h2>
      <Link to={`/post/${postData.objectID}`}>
        <p>Comments</p>
      </Link>
    </div>
  );
}

export default PostCard;
