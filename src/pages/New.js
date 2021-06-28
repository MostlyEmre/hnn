import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import PostCard from "../components/PostCard";
import Loading from "../components/Loading";

function New() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHNData();
  }, []);
  // RECORD: created_at_i, title, author, points, num_comments, objectID, type
  const getHNData = () => {
    fetch("http://hn.algolia.com/api/v1/search_by_date?tags=(story,show_hn,ask_hn)&hitsPerPage=10")
      .then((response) => response.json())
      .then((data) => data.hits.map((singlePost) => setPosts((posts) => [...posts, singlePost])))
      .then(() => setLoading(false));
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={uuidv4()} postData={post} />
      ))}
    </div>
  );
}

export default New;
