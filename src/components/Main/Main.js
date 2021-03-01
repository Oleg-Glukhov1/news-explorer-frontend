import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import "./Main.css";
import NotFondPreloyder from "../NotFondPreloyder/NotFondPreloyder";

function Main({
  handleSearchClick,
  articles,
  keyword,
  isPreloader,
  newsSavedArticles,
  savedArticles,
  loggedIn,
  onRegisterClick,
  isPreloaderNotFound,
}) {
  return (
    <main className="content">
      <SearchForm handleSearchClick={handleSearchClick} />
      <Preloader isPreloader={isPreloader} />
      <NotFondPreloyder isPreloaderNotFound={isPreloaderNotFound} />
      <NewsCardList
        isSavedNews={false}
        articles={articles}
        keyword={keyword}
        newsSavedArticles={newsSavedArticles}
        savedArticles={savedArticles}
        loggedIn={loggedIn}
        onRegisterClick={onRegisterClick}
      />
      <About />
    </main>
  );
}

export default Main;
