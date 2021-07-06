import React from "react";

function Favorite({ postID, postData, favorites, setFavorites }) {
  const addFavorite = () => {
    setFavorites([...(favorites || []), postData]);
  };

  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite) => favorite.objectID !== postID));
  };

  const handleClick = () => {
    favorites.includes(postData) ? removeFavorite() : addFavorite();
  };

  if (favorites.includes(postData)) {
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
