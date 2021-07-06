import React from "react";
import Favorite from "./Favorite";
import SharePost from "./SharePost";
import CommentsButton from "./CommentsButton";

export default function ButtonBundle({ favorites, postData, setFavorites, postID, numberOfComments }) {
  return (
    <div>
      <CommentsButton postID={postID} numberOfComments={numberOfComments} />
      <Favorite postID={postID} postData={postData} favorites={favorites} setFavorites={setFavorites} />
      <SharePost postID={postID} />
    </div>
  );
}
