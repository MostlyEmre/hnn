import React, { useEffect, useState } from "react";

function Favorite({ postID, favorites, setFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    (favorites || []).includes(postID) ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorites, postID]);

  const addFavorite = () => {
    console.log(`Adding favorite...`);
    setFavorites([...(favorites || []), postID]);
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    console.log(`Removing favorite...`);
    setFavorites(favorites.filter((favorite) => favorite !== postID));
    setIsFavorite(false);
  };

  const handleClick = () => {
    isFavorite === true ? removeFavorite() : addFavorite();
  };

  if (isFavorite === true) {
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
