import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({
  loggedIn,
  screenWidth,
  isMobilePopup,
  onMobilePopup,
  onLoginClick,
  isBlack,
  handleExit,
}) {
  const buttonMenu = (
    <button className="header__icon" onClick={onMobilePopup} type="button">
      <span
        className={
          isBlack
            ? isMobilePopup
              ? "header__icon_line"
              : "header__icon_line header__icon_line_black"
            : "header__icon_line"
        }
      />
      <span
        className={
          isBlack
            ? isMobilePopup
              ? "header__icon_line"
              : "header__icon_line header__icon_line_black"
            : "header__icon_line"
        }
      />
    </button>
  );
  return (
    <header
      className={
        isMobilePopup && screenWidth <= 680
          ? "header header__black"
          : "header header__border-black"
      }
    >
      <Link
        className={
          isBlack
            ? isMobilePopup && screenWidth <= 680
              ? "header__logo"
              : "header__logo header__logo_black"
            : "header__logo"
        }
        to="/"
      >
        NewsExplorer
      </Link>
      {screenWidth <= 680 && buttonMenu}
      <Navigation
        isMobilePopup={isMobilePopup}
        loggedIn={loggedIn}
        onLoginClick={onLoginClick}
        isBlack={isBlack}
        handleExit={handleExit}
      />
    </header>
  );
}

export default Header;
