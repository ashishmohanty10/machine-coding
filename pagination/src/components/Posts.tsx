import { useEffect, useState } from "react";
import { Post } from "../types/types";
import { POST_LIMIT } from "../constants/constant";
import { SinglePost } from "./Single-Posts";

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=200");
    const jsonData = await response.json();

    setPosts(jsonData.posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const TOTAL_PRODUCTS = posts.length;
  const TOTAL_PAGES = Math.ceil(TOTAL_PRODUCTS / POST_LIMIT);
  const START = currentPage * POST_LIMIT;
  const END = START + POST_LIMIT;

  const handleCurrentPageChange = (n: number) => {
    setCurrentPage(n);
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, TOTAL_PAGES - 1));
  };

  return !posts.length ? (
    <div>NO POSTS FOUND</div>
  ) : (
    <div className="post-container">
      <h2>PAGINATION</h2>
      <div className="pagination-container">
        <button
          disabled={currentPage === 0}
          className="pagination-number"
          onClick={prevPage}
        >
          PREV
        </button>

        {[...Array(TOTAL_PAGES).keys()].map((n) => (
          <span
            key={n}
            className={`pagination-number ${currentPage === n ? "active" : ""}`}
            onClick={() => handleCurrentPageChange(n)}
          >
            {n + 1}
          </span>
        ))}

        <button
          disabled={currentPage === TOTAL_PAGES - 1}
          className="pagination-number"
          onClick={nextPage}
        >
          NEXT
        </button>
      </div>

      <div className="post-container">
        {posts.slice(START, END).map((post) => (
          <div key={post.id}>
            <SinglePost post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
