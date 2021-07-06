import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import components
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";

export default function Favorites({ favorites, setFavorites }) {
  // const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [favoritePosts, setFavoritePosts] = useState([]);

  useEffect(() => {
    console.log(favorites);
    // transferFavorites();
    setLoading(false);
  }, []);

  // const transferFavorites = () => {
  //   favorites.forEach((favorite) => {
  //     fetch(`http://hn.algolia.com/api/v1/items/${favorite}`)
  //       .then((response) => response.json())
  //       .then((data) => setFavoritePosts([...(favoritePosts || []), data]));
  //   });
  // };
  // const getHNData = (favoriteID) => {
  //   console.log(favoriteID);
  //   fetch(`http://hn.algolia.com/api/v1/items/${favoriteID}`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //   // .then(() => setLoading(false));
  // };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      {favorites.map((favorite) => (
        <PostCard key={uuidv4()} postData={favorite} favorites={favorites} setFavorites={setFavorites} />
      ))}
    </>
  );
}
