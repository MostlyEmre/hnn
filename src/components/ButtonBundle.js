import React from "react";
import Favorite from "./Favorite";
import SharePost from "./SharePost";
import CommentsButton from "./CommentsButton";
import PaywallButton from "./PaywallButton";

export default function ButtonBundle({ favorites, postData, setFavorites, postID, numberOfComments }) {
  return (
    <div className="button-bundle">
      <CommentsButton postID={postID} numberOfComments={numberOfComments} />
      <Favorite postID={postID} postData={postData} favorites={favorites} setFavorites={setFavorites} />
      <SharePost postID={postID} />
      {postData.paywall === "true" ? <PaywallButton url={postData.url} /> : null}
    </div>
  );
}
