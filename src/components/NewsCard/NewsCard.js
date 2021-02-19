import React from "react";
import "./NewsCard.css";

function NewsCard({
  image,
  keyword,
  date,
  title,
  text,
  source,
  isSavedNews,
  newsSavedArticles,
  article,
  loggedIn,
  onRegisterClick,
  savedArticles,
  myArticle,
  link,
}) {
  function handleIconClick() {
    newsSavedArticles(article, keyword, myArticle);
  }
  const isActiveIcon = savedArticles.some((i) => i.title === title);

  function handleDate() {
    let month = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июнья",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    let now = new Date();
    const formatDate = `${now.getDate()} ${
      month[now.getMonth()]
    }, ${now.getFullYear()}`;
    return formatDate;
  }

  return (
    <div className="news-card">
      <img className="news-card__img" src={image} alt={title} />
      <p
        className={
          isSavedNews ? "news-card__keyword" : "news-card__keyword_hidden"
        }
      >
        {keyword}
      </p>
      {loggedIn ? (
        <>
          <button
            className={`news-card__button ${
              isSavedNews
                ? "news-card__button_delete"
                : isActiveIcon
                ? "news-card__button_save_focus"
                : "news-card__button_save"
            }`}
            type="button"
            onClick={handleIconClick}
          ></button>
          <p className="news-card__message">
            {isSavedNews || isActiveIcon
              ? "Убрать из сохранённых"
              : "Cохранить статью"}
          </p>
        </>
      ) : (
        <>
          <button
            className={`news-card__button ${
              isSavedNews
                ? "news-card__button_delete"
                : "news-card__button_save"
            }`}
            type="button"
            onClick={onRegisterClick}
          ></button>
          <p className="news-card__message">Войдите, чтобы сохранять статьи</p>
        </>
      )}
      <a
        className="news-card__link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="news-card__date">{handleDate(date)}</p>
        <p className="news-card__title">{title}</p>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </a>
    </div>
  );
}

export default NewsCard;
