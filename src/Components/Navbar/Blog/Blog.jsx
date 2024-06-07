import { useState, useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=748bc239536d4202a6562feb75d38d07';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching the data:', error));
  }, []); // Empty dependency array ensures this runs only once

  const handleImageError = (index) => {
    setArticles(prevArticles => {
      const newArticles = [...prevArticles];
      newArticles.splice(index, 1); // Remove the article with the broken image
      return newArticles;
    });
  };

  return (
    <div className="grid-container-blog">
      {articles.slice(1, 9).map((article, index) => (
        <a href={article.url} target="_blank" rel="noopener noreferrer" key={index} className="grid-items">
          <img
            src={article.urlToImage}
            alt={article.title}
            onError={() => handleImageError(index)}
          />
          <h2 className="blog-heading">{article.title}</h2>
          <p className="blog-subheading">{article.content}</p>
        </a>
      ))}
    </div>
  );
};

export default Blog;
