import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";

function NewsBoard({ category, searchQuery }) {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllArticles(data.articles || []);
        setFilteredArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredArticles(allArticles);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = allArticles.filter(
        (article) =>
          (article.title && article.title.toLowerCase().includes(query)) ||
          (article.description &&
            article.description.toLowerCase().includes(query))
      );
      setFilteredArticles(filtered);
    }
  }, [searchQuery, allArticles]);

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  if (filteredArticles.length === 0)
    return <p className="text-center mt-4">No articles found</p>;

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
      {filteredArticles.map((article, i) => (
        <NewsItem
          key={i}
          title={article.title}
          description={article.description}
          src={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
}

export { NewsBoard };
