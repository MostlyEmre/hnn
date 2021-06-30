import React, { useEffect, useState } from "react";

function Favorite({ postID, favorites, setFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect(() => {
  //   getFavorites();
  //   favorites.includes(postID) ? setIsFavorite(true) : setIsFavorite(false);
  //   setLoading(false);
  // }, []);

  // useEffect(() => {}, [isFavorite]);

  // const handleClick = () => {
  //   console.log(`Favorited`);
  //   if (favorites.includes(postID)) {
  //     removeFavorite(postID);
  //   } else {
  //     setFavorites(postID);
  //   }
  // };

  // const saveFavorites = () => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // };

  // const removeFavorite = (postID) => {
  //   let storageFavorites = JSON.parse(localStorage.getItem("favorites"));
  //   let filteredFavorites = storageFavorites.filter((favorite) => !postID);
  //   console.log(filteredFavorites);
  //   setFavorites(filteredFavorites);
  // };

  // const getFavorites = () => {
  //   if (localStorage.getItem("favorites" === null)) {
  //     localStorage.getItem("favorites", JSON.stringify([]));
  //   } else {
  //     let localFavorites = JSON.parse(localStorage.getItem("favorites"));
  //     setFavorites(localFavorites);
  //   }
  // };

  useEffect(() => {
    favorites.includes(postID) ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorites]);

  const addFavorite = () => {
    console.log(`Adding favorite...`);
    setFavorites([...favorites, postID]);
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    console.log(`Removing favorite...`);

    let newFavorites = favorites.filter((favorite) => favorite !== postID);
    setFavorites(newFavorites);
    setIsFavorite(false);
  };

  const handleClick = () => {
    favorites.includes(postID) ? removeFavorite() : addFavorite();
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
