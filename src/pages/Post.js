import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { xAgo, urlDissector } from "../helper";
import GoBack from "../components/GoBack";
import { v4 as uuidv4 } from "uuid";
import Comment from "../components/Comment";
import Loading from "../components/Loading";
import CommentsLoading from "../components/CommentsLoading";
import { paywallArray } from "../paywall";
import PaywallCard from "../components/PaywallCard";

function Post({ match }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    fetchPost(match.params.id);
  }, []);

  function urlObjectValue(postAddress) {
    if (postAddress !== null) {
      const postDomain = urlDissector(postAddress);
      for (let i = 0; i < paywallArray.length; i++) {
        if (postDomain.includes(paywallArray[i])) {
          return "true";
        }
      }
    }
  }

  const fetchPost = async (id) => {
    const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
    const data = await response.json();
    setPost({
      id: data.id,
      created_at_i: data.created_at_i,
      paywall: urlObjectValue(data.url),
      type: data.type,
      author: data.author,
      title: data.title,
      url: data.url,
      text: data.text,
      points: data.points,
      children: data.children,
    });

    setLoading(false);
    if (data.children.length !== 0) {
      setCommentCount(data.children.length);
    }
    setComments(data.children);
    setCommentsLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (commentCount === 0) {
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

        {post.text ? <div className="post-text" dangerouslySetInnerHTML={{ __html: post.text }} /> : null}
        {post.paywall === "true" ? <PaywallCard rawURL={post.url} hostName={urlDissector(post.url)} /> : null}
        <hr />
        <div>
          <p>There are no comments yet.</p>
        </div>
      </div>
    );
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

      {post.text ? <div className="post-text" dangerouslySetInnerHTML={{ __html: post.text }} /> : null}
      {post.paywall === "true" ? <PaywallCard rawURL={post.url} hostName={urlDissector(post.url)} /> : null}
      <hr />
      {comments.map((comment) => (
        <Comment key={uuidv4()} comments={comment} />
      ))}
    </div>
  );
}

export default Post;
