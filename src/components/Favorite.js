import React, { useEffect, useState } from "react";
import _ from "lodash";
function Favorite({ postID, favorites, setFavorites }) {
  const addFavorite = () => {
    console.log(`Adding favorite...`);
    setFavorites([...(favorites || []), postID]);
    console.log(`New favorites ${favorites}`);
  };

  const removeFavorite = () => {
    console.log(`Removing favorite...`);
    setFavorites(favorites.filter((favorite) => favorite !== postID));
    console.log(`New favorites ${favorites}`);
  };

  const handleClick = () => {
    _.includes(favorites, postID) ? removeFavorite() : addFavorite();
  };

  if (_.includes(favorites, postID)) {
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
