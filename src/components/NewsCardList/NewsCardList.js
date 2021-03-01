import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  onRegisterClick,
  articles,
  isSavedNews,
  newsSavedArticles,
  savedArticles,
  keyword,
  loggedIn,
}) {
  const [renderArticles, setRenderArticles] = React.useState([]);
  React.useEffect(() => {
    setRenderArticles(articles.slice(0, 3));
  }, [articles]);

  function handleShowArticles() {
    setRenderArticles(articles.slice(0, renderArticles.length + 3));
  }
  return (
    <section
      className={
        renderArticles.length > 0
          ? "news-card-list"
          : "news-card-list_notactive"
      }
    >
      <h3
        className={
          isSavedNews ? "news-card-list__hidden" : "news-card-list__title"
        }
      >
        Результаты поиска
      </h3>
      <div className="news-card-list__cards">
        {renderArticles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            text={article.description}
            date={article.publishedAt}
            source={article.source.name}
            image={article.urlToImage}
            link={article.url}
            isSavedNews={isSavedNews}
            newsSavedArticles={newsSavedArticles}
            savedArticles={savedArticles}
            article={article}
            keyword={keyword}
            loggedIn={loggedIn}
            onRegisterClick={onRegisterClick}
          />
        ))}
      </div>
      <button
        type="submit"
        className={
          isSavedNews ? "news-card-list__hidden" : "news-card-list__button"
        }
        onClick={handleShowArticles}
      >
        Показать еще
      </button>
    </section>
  );
}

export default NewsCardList;
