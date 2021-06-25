import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { xAgo } from "../helper";
import GoBack from "../components/GoBack";
import { v4 as uuidv4 } from "uuid";
import Comment from "../components/Comment";

function Post({ match }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPost(match.params.id);
  }, []);

  const fetchPost = async (id) => {
    const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
    const data = await response.json();
    setPost(data);
    setComments(data.children);
    // count_of_children: comment.children.length,
    // children: comment.children,
    // author: comment.author,
    // created_at_i: comment.created_at_i,
    // text: comment.text,
    // parent_id: comment.parent_id,
    // story_id: comment.story_id,
    setLoading(false);
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="main-post-wrapper">
      <GoBack />
      <h1 className="post-title">{post.title}</h1>
      <p className="post-meta">
        This {post.type} is submitted by <Link to={`/user/${post.author}`}>{post.author}</Link> around {xAgo(post.created_at_i)}.
      </p>
      {post.url ? (
        <div className="external-link-wrapper">
          <a className="external-link" href={post.url} target="_blank" rel="noreferrer">
            {post.url}
          </a>
        </div>
      ) : null}

      {post.text ? <div className="post-text" dangerouslySetInnerHTML={{ __html: post.text }} /> : console.log(`no`)}
      <hr />
      {comments.map((comment) => (
        <Comment key={uuidv4()} comments={comment} />
      ))}
    </div>
  );
}

export default Post;
