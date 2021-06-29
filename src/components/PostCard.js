import React from "react";
import ButtonBundle from "./ButtonBundle";

function PostCard({ postData, favorites, setFavorites }) {
  return (
    <div className="post-wrapper">
      <h2>
        <a href={postData.url} target="_blank" rel="noreferrer">
          {postData.title}
        </a>
      </h2>
      <ButtonBundle favorites={favorites} setFavorites={setFavorites} numberOfComments={postData.num_comments} postID={postData.objectID} />
    </div>
  );
}

export default PostCard;
