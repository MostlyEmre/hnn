import React from "react";

function Comment({ comments }) {
  return comments.text ? (
    <div className="comment" dangerouslySetInnerHTML={{ __html: comments.text }} />
  ) : (
    <div style={{ display: "hidden" }}>
      <p></p>
    </div>
  );
}

export default Comment;
