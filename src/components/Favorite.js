import React from "react";

function Favorite({ postID, postData, favorites, setFavorites }) {
  const addFavorite = () => {
    setFavorites([
      ...(favorites || []),
      {
        title: postData.title,
        url: postData.url,
        objectID: postData.objectID,
      },
    ]);
  };

  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite) => favorite.objectID !== postID));
  };

  const handleClick = () => {
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
