import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHNData();
  }, []);

  const getHNData = () => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => response.json())
      .then((data) => data.hits.map((singlePost) => setPosts((posts) => [...posts, singlePost])))
      .then(() => setLoading(false));
  };
  if (loading) {
    return <p>Loading data...</p>;
  }
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={uuidv4()} postData={post} />
      ))}
    </div>
  );
}

export default Home;
