import React from "react";
import "./Navigation.css";
import buttonExit from "../../images/button-exit.svg";
import { NavLink } from "react-router-dom";

function nav({ loggedIn, screenWidth, isMobilePopup, onLoginClick }) {
  return (
    <nav className={`nav ${isMobilePopup && "nav_mobile_open"}`}>
      {loggedIn ? (
        <>
          <NavLink
            activeClassName="nav__link_active"
            className="nav__link"
            exact
            to="/"
          >
            Главная
          </NavLink>
          <button onClick={onLoginClick} className="nav__button">
            Авторизоваться
          </button>
        </>
      ) : (
        <>
          <NavLink
            activeClassName="nav__link_active"
            className={
              isMobilePopup && screenWidth < 680
                ? "nav__link"
                : "nav__link nav__link_black"
            }
            exact
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={
              isMobilePopup && screenWidth < 680
                ? "nav__link"
                : "nav__link nav__link_black"
            }
            activeClassName="nav__link_active"
            to="/saved-news"
          >
            Сохраненные статьи
          </NavLink>
          <button
            className={
              isMobilePopup && screenWidth < 680
                ? "nav__button"
                : "nav__button nav__button_black"
            }
          >
            Грета
            <img className="nav__img" src={buttonExit} alt="Выход" />
          </button>
        </>
      )}
    </nav>
  );
}

export default nav;
