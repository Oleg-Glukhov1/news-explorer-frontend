import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
// import Preloader from '../Preloader/Preloader';
// import NoResult from '../NoResult/NoResult';
import About from "../About/About";
import "./Main.css";
import cards from "../../utils/cards";

function Main() {
  return (
    <main className="content">
      <SearchForm />
      {/* <Preloader /> */}
      <NewsCardList cards={cards} isSavedNews={false} />
      <About />
    </main>
  );
}

export default Main;
