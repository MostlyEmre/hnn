import React from "react";
import ButtonBundle from "./ButtonBundle";
import { Link } from "react-router-dom";
import { xAgo, urlDissector } from "../helper.js";

function PostCard({ postData, favorites, setFavorites }) {
  return (
    <div className="post-wrapper">
      {postData.url === null ? (
        <h2 className="postTitle">
          <Link to={`/post/${postData.objectID}`}>{postData.title}</Link>
        </h2>
      ) : (
        <h2 className="postDomainTitle">
          <a href={postData.url} target="_blank" rel="noreferrer">
            {postData.title}
          </a>
        </h2>
      )}
      <p className="postDomain">
        {postData.url !== null ? <span>{urlDissector(postData.url)} </span> : null}
        <span>
          → Shared by{" "}
          <Link to={`/user/${postData.author}`} className="comment-username">
            {postData.author}
          </Link>{" "}
          {xAgo(postData.created_at_i)}
          {"."}
        </span>
      </p>
      <ButtonBundle postData={postData} favorites={favorites} setFavorites={setFavorites} numberOfComments={postData.num_comments} postID={postData.objectID} />
    </div>
  );
}

export default PostCard;
