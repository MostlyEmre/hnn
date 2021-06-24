import React from "react";
import parse from "html-react-parser";

function Comment({ comments }) {
  return <div className="comment" dangerouslySetInnerHTML={{ __html: comments.text }} />;
}

export default Comment;
