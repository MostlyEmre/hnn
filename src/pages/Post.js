import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { xAgo } from "../helper";
import GoBack from "../components/GoBack";

function Post({ match }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost(match.params.id);
  }, []);

  const fetchPost = async (id) => {
    const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <GoBack />
      <p>{post.title}</p>
      <a href={post.url} target="_blank" rel="noreferrer">
        {post.url}
      </a>
      <p>
        This {post.type} is submitted by <Link to={`/user/${post.author}`}>{post.author}</Link> {xAgo(post.created_at_i)}.
      </p>
    </div>
  );
}

export default Post;
