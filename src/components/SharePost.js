import React, { useState, useEffect } from "react";

export default function SharePost({ postID }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }, [copy]);

  const handleClick = (e) => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${postID}`);
    setCopy(true);
  };

  return (
    <div className="favorite-wrapper">
      {copy ? (
        <button className="copied" onClick={handleClick}>
          Link is Copied!
        </button>
      ) : (
        <button onClick={handleClick}>Copy Post Link</button>
      )}
    </div>
  );
}
