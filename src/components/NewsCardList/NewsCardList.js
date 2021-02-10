import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ cards, isSavedNews }) {
  return (
    <section className="news-card-list">
      <h3
        className={
          isSavedNews ? "news-card-list__hidden" : "news-card-list__title"
        }
      >
        Результаты поиска
      </h3>
      <div className="news-card-list__cards">
        {cards.map((card, index) => (
          <NewsCard
            key={index}
            keyword={card.keyword}
            title={card.title}
            text={card.text}
            date={card.date}
            source={card.source}
            image={card.image}
            isSavedNews={isSavedNews}
          />
        ))}
      </div>
      <button
        type="submit"
        className={
          isSavedNews ? "news-card-list__hidden" : "news-card-list__button"
        }
      >
        Показать еще
      </button>
    </section>
  );
}

export default NewsCardList;
