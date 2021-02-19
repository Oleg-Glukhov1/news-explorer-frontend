import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";

function SavedNews({ savedArticles, loggedIn, newsSavedArticles }) {
  return (
    <section className="saved-news">
      <SavedNewsHeader savedArticles={savedArticles} />
      <div className="news-card-list">
        <div className="news-card-list__cards">
          {savedArticles.map((article, index) => (
            <NewsCard
              key={index}
              keyword={article.keyword}
              title={article.title}
              text={article.text}
              date={article.date}
              source={article.source}
              image={article.image}
              link={article.link}
              myArticle={article}
              newsSavedArticles={newsSavedArticles}
              savedArticles={savedArticles}
              loggedIn={loggedIn}
              isSavedNews={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
