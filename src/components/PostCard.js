import React from "react";
import ButtonBundle from "./ButtonBundle";
import { Link } from "react-router-dom";

function PostCard({ postData, favorites, setFavorites }) {
  return (
    <div className="post-wrapper">
      <h2>
        {postData.url === null ? (
          <Link to={`/post/${postData.objectID}`}>{postData.title}</Link>
        ) : (
          <a href={postData.url} target="_blank" rel="noreferrer">
            {postData.title}
          </a>
        )}
      </h2>
      <ButtonBundle postData={postData} favorites={favorites} setFavorites={setFavorites} numberOfComments={postData.num_comments} postID={postData.objectID} />
    </div>
  );
}

export default PostCard;
