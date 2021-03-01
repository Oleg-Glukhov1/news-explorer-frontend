import React from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import "./Navigation.css";
import buttonExitBlack from "../../images/button-exit.svg";
import buttonExitWhite from "../../images/button-exit-white.svg";

function Navigation({ loggedIn, screenWidth, isMobilePopup, onLoginClick, isBlack, handleExit }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <nav className={`nav ${isMobilePopup && "nav_mobile_open"}`}>
      {loggedIn ? (
        <>
          <NavLink
            activeClassName="nav__link_active"
            className={
              isBlack
                ? isMobilePopup && screenWidth < 680
                  ? "nav__link"
                  : "nav__link nav__link_black"
                : "nav__link"
            }
            exact
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={
              isBlack
                ? isMobilePopup && screenWidth < 680
                  ? "nav__link"
                  : "nav__link nav__link_black"
                : "nav__link"
            }
            activeClassName="nav__link_active"
            to="/saved-news"
          >
            Сохраненные статьи
          </NavLink>
          <button
          onClick={handleExit}
            className={
              isBlack? 
              (isMobilePopup && screenWidth < 680
                ? "nav__button"
                : "nav__button nav__button_black") :
                "nav__button"
            }
          >{currentUser.name}
            <img className="nav__img"  src={isMobilePopup? buttonExitBlack : (isBlack? buttonExitBlack : buttonExitWhite)} alt="Выход" />
          </button>
        </>
      ) : (
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
      )}
    </nav>
  );
}

export default Navigation;
