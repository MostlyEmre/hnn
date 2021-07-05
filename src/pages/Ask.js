import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import components
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

export default function Ask({ favorites, setFavorites }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentPage(1);
    getHNData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentPage >= totalPages]);

  useEffect(() => {
    // setPosts([]);
    setLoading(true);
    getHNData();
  }, [currentPage]);

  const getHNData = () => {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=ask_hn&page=${currentPage}&hitsPerPage=10`)
      .then((response) => response.json())
      .then((data) => {
        setPosts([]);
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
