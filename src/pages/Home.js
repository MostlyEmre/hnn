import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import { useParams, useLocation } from "react-router-dom";

function Home() {
  let location = useLocation();
  let { postType } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts([]);
    setLoading(true);
    console.log(location.pathname);
    pageSwitch(location.pathname);
  }, [location.pathname]);
  // RECORD: created_at_i, title, author, points, num_comments, objectID, type

  const pageSwitch = (postType) => {
    switch (postType) {
      case "/":
        getHNData("front_page");
        break;
      case "/new":
        getHNData("(story,show_hn,ask_hn)");
        break;
      case "/show":
        getHNData("show_hn");
        break;
      case "/ask":
        getHNData("ask_hn");
        break;
      case "/frontpage":
        getHNData("front_page");
      default:
        getHNData("front_page");
        break;
    }
  };

  const getHNData = (name) => {
    fetch(name === "(story,show_hn,ask_hn)" ? `https://hn.algolia.com/api/v1/search_by_date?tags=${name}&hitsPerPage=10` : `https://hn.algolia.com/api/v1/search?tags=${name}&hitsPerPage=10`)
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

export default Home;
