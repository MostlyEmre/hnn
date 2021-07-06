import React from "react";
import { v4 as uuidv4 } from "uuid";
// import components
import PostCard from "../components/PostCard";

export default function Favorites({ favorites, setFavorites }) {
  return (
    <div>
      {favorites.map((favorite) => (
        <PostCard key={uuidv4()} postData={favorite} favorites={favorites} setFavorites={setFavorites} />
      ))}
    </div>
  );
}
