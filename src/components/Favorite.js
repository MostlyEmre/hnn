import React, { useEffect } from "react";

function Favorite({ postID, postData, favorites, setFavorites }) {
  const addFavorite = () => {
    setFavorites([
      ...(favorites || []),
      {
        title: postData.title,
        url: postData.url,
        objectID: postData.objectID,
        paywall: postData.paywall,
        created_at_i: postData.created_at_i,
        num_comments: postData.num_comments,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite) => favorite.objectID !== postID));
  };

  const handleClick = (e) => {
    e.preventDefault();
    favorites.some((favorite) => favorite.objectID === postID) ? removeFavorite() : addFavorite();
  };

  if (favorites.some((favorite) => favorite.objectID === postID)) {
    return (
      <div className="favorited">
        <button onClick={handleClick}>Favorited</button>
      </div>
    );
  }

  return (
    <div className="favorite-wrapper">
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
}

export default Favorite;
