import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import PostCard from "./PostCard";
import Loading from "./Loading";

export default function LastPosts({ user }) {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLastThreePosts();
  }, []);

  const fetchLastThreePosts = () => {
    fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=story,author_${user}&hitsPerPage=3`)
      .then((response) => response.json())
      .then((data) =>
        data.hits.map((singlePost) =>
          setRecentPosts((posts) => [
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
    return <Loading />;
  }

  return (
    <div>
      <h2>Latest Posts</h2>
      {recentPosts.map((post) => (
        <PostCard key={uuidv4()} postData={post} />
      ))}
    </div>
  );
}
