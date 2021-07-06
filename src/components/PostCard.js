import React, { useState, useEffect } from "react";
import ButtonBundle from "./ButtonBundle";
import { Link } from "react-router-dom";
import { paywallArray } from "../paywall.js";

function PostCard({ postData, favorites, setFavorites }) {
  const [isPaywalled, setIsPaywalled] = useState(false);
  const [postDomain, setPostDomain] = useState("");

  useEffect(() => {
    if (postData.url) {
      const postURL = new URL(postData.url);
      setPostDomain(postURL.hostname);
      paywallArray.forEach((paywall) => {
        if (postDomain.includes(paywall)) {
          console.log(`Post ${postURL} is paywalled.`);
          setIsPaywalled(true);
        }
      });
    }
  }, []);

  return (
    <div className="post-wrapper">
      <h2>
        {postData.url === null ? (
          <Link to={`/post/${postData.objectID}`}>{postData.title}</Link>
        ) : (
          <a href={postData.url} target="_blank" rel="noreferrer">
            {postData.title} <span className="postDomain">> {postDomain}</span>
          </a>
        )}
      </h2>
      <ButtonBundle postData={postData} isPaywalled={isPaywalled} favorites={favorites} setFavorites={setFavorites} numberOfComments={postData.num_comments} postID={postData.objectID} />
    </div>
  );
}

export default PostCard;
