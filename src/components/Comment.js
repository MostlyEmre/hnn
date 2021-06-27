import React from "react";
import { xAgo } from "../helper";
import { Link } from "react-router-dom";

function Comment({ comments }) {
  if (!comments.text) {
    return <div style={{ display: "hidden" }} />;
  }

  return (
    <div>
      <div className="comment" dangerouslySetInnerHTML={{ __html: comments.text }} />
      <p className="comment-meta">
        {`> `}
        <Link to={`/user/${comments.author}`} className="comment-username">
          {comments.author}
        </Link>
      </p>
      <p className="comment-meta">{xAgo(comments.created_at_i)}</p>
    </div>
  );
}

export default Comment;
