import React from "react";

function Favorite() {
  const addToFavorite = () => {
    console.log(`Favorited`);
  };

  return (
    <div className="favorite-wrapper">
      <button onClick={addToFavorite}>Favorite</button>
    </div>
  );
}

export default Favorite;
