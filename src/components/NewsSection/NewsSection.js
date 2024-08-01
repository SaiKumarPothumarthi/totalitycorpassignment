import React, { useState, useEffect } from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&pageSize=3&apiKey=a4e50d69d829427e89c6b4de7b047ee0");
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="news-section">
      <h2>Latest News</h2>
      {newsArticles.map((article, index) => (
        <div key={index} className="news-article">
          <h3>{article.title}</h3>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
