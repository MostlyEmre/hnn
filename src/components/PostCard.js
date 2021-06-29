import React from "react";
import ButtonBundle from "./ButtonBundle";

function PostCard({ postData }) {
  return (
    <div className="post-wrapper">
      <h2>
        <a href={postData.url} target="_blank" rel="noreferrer">
          {postData.title}
        </a>
      </h2>
      <ButtonBundle numberOfComments={postData.num_comments} postID={postData.objectID} />
    </div>
  );
}

export default PostCard;
