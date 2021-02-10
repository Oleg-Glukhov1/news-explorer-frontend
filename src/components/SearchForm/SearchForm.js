import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search__form">
      <h1 className="search__form_title">
        Что творится в <br />
        мире?
      </h1>
      <p className="search__form_text">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <fieldset className="search__form_fieldset">
        <input
          className="search__form_input"
          type="text"
          placeholder="Введите тему новости"
          required
        ></input>
        <button className="search__form_button" type="submit">
          Искать
        </button>
      </fieldset>
    </form>
  );
}

export default SearchForm;
