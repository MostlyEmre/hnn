import React, { useEffect, useState } from "react";

function Favorite({ postID }) {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleClick = () => {
    console.log(`Favorited`);
    setFavorites(postID);
  };

  // const saveFavorites = () => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // };

  if (loading) {
    return (
      <div className="favorite-wrapper">
        <button>Loading</button>
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
