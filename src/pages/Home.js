import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHNData();
  }, []);
  // RECORD: created_at_i, title, author, points, num_comments, objectID, type
  const getHNData = () => {
    fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => response.json())
      .then((data) =>
        data.hits.map((singlePost) =>
          setPosts((posts) => [
            ...posts,
            {
              favorite: false,
              created_at_i: singlePost.created_at_i,
              title: singlePost.title,
              author: singlePost.author,
              points: singlePost.points,
              num_comments: singlePost.num_comments,
              objectID: singlePost.objectID,
              type: singlePost.type,
              url: singlePost.url,
            },
          ])
        )
      )
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
