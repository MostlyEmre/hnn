import React from "react";
import { Link } from "react-router-dom";

export default function CommentsButton({ numberOfComments, postID }) {
  return (
    <div className="favorite-wrapper">
      <Link to={`/post/${postID}`}>
        <button>{numberOfComments} Comments</button>
      </Link>
    </div>
  );
}
