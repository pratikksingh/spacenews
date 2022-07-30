import React, { useState, useEffect } from "react";
import image from "./images/space.png";

import "./App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="App">
      <h1>Space News🌌</h1>
      <div className="news">
        {news.map((news, key) => {
          return (
            <div key={key} className="article">
              <h2>{news.title}</h2>
              <img className="img" src={news.imageUrl} />
              <p>{news.summary}</p>
              <h3>{news.publishedAt}</h3>
              <small
                onClick={() => {
                  window.location.href = news.url;
                }}
              >
                <b>click here to view full article...</b>
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
