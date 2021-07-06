import React from "react";
import Favorite from "./Favorite";
import SharePost from "./SharePost";
import CommentsButton from "./CommentsButton";
import PaywallButton from "./PaywallButton";

export default function ButtonBundle({ favorites, isPaywalled, postData, setFavorites, postID, numberOfComments }) {
  return (
    <div>
      <div>
        <CommentsButton postID={postID} numberOfComments={numberOfComments} />
        <Favorite postID={postID} postData={postData} favorites={favorites} setFavorites={setFavorites} />
        <SharePost postID={postID} />
        {isPaywalled ? <PaywallButton url={postData.url} /> : console.log(`not a paywall`)}
      </div>
    </div>
  );
}
