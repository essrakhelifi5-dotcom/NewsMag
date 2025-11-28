import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div>
      <h2 className='text-center mt-4'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>

      {/* Conteneur flex pour centrer les cartes */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', // centrer horizontalement
          gap: '15px',              // espace entre les cartes
          marginTop: '20px',
        }}
      >
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};
