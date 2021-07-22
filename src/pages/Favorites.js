import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
// import components
import PostCard from "../components/PostCard";

export default function Favorites({ favorites, setFavorites }) {
  if (favorites.length === 0) {
    return (
      <div className="no-favorite-warning">
        <p>
          You don't have any favorites yet. Feel free to start with checking out the <Link to="/new">new posts</Link>!
        </p>
      </div>
    );
  }

  return (
    <div>
      {favorites.map((favorite) => (
        <PostCard key={uuidv4()} postData={favorite} favorites={favorites} setFavorites={setFavorites} />
      ))}
    </div>
  );
}
