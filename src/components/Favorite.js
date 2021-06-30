import React from "react";

function Favorite({ postID, favorites, setFavorites }) {
  const addFavorite = () => {
    setFavorites([...(favorites || []), postID]);
  };

  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite) => favorite !== postID));
  };

  const handleClick = () => {
    favorites.includes(postID) ? removeFavorite() : addFavorite();
  };

  if (favorites.includes(postID)) {
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
