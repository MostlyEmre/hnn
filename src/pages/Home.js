import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";

function Home({ favorites, setFavorites }) {
  let { postType } = useParams();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setPosts([]);
    setLoading(true);
    pageSwitch(postType);
  }, [postType]);
  // RECORD: created_at_i, title, author, points, num_comments, objectID, type

  useEffect(() => {
    setCurrentPage(1);
  }, [currentPage >= totalPages]);

  useEffect(() => {
    // setPosts([]);
    setLoading(true);
    console.log(`CurrentPage useEffect`);
    pageSwitch(postType);
  }, [currentPage]);

  const pageSwitch = (postType) => {
    console.log(`\n\npageSwitch => ${postType}`);
    switch (postType) {
      case "new":
        getHNData("(story,show_hn,ask_hn)");
        break;
      case "show":
        getHNData("show_hn");
        break;
      case "ask":
        getHNData("ask_hn");
        break;
      case "frontpage":
        getHNData("front_page");
        break;
      default:
        getHNData("front_page");
        break;
    }
  };

  const getHNData = (name) => {
    fetch(
      name === "(story,show_hn,ask_hn)"
        ? `https://hn.algolia.com/api/v1/search_by_date?tags=${name}&page=${currentPage}&hitsPerPage=10`
        : `https://hn.algolia.com/api/v1/search?tags=${name}&page=${currentPage}&hitsPerPage=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts([]);
        console.log(name);
        console.log(currentPage);
        console.log(data);
        setCurrentPage(data.page);
        setTotalPages(data.nbPages);
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
        );
      })
      .then(() => setLoading(false));
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={uuidv4()} postData={post} favorites={favorites} setFavorites={setFavorites} />
      ))}
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Home;
