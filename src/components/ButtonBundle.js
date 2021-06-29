import React from "react";
import Favorite from "./Favorite";
import SharePost from "./SharePost";
import CommentsButton from "./CommentsButton";

export default function ButtonBundle({ postID, numberOfComments }) {
  return (
    <div>
      <CommentsButton postID={postID} numberOfComments={numberOfComments} />
      <Favorite postID={postID} />
      <SharePost postID={postID} />
    </div>
  );
}
