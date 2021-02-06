import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, screenWidth, isMobilePopup , onMobilePopup, onLoginClick}) {


  const buttonMenu =  (
    <button className="header__icon" onClick={onMobilePopup} type="button">
      <span className={loggedIn ? "header__icon_line" : (isMobilePopup ? "header__icon_line" : "header__icon_line header__icon_line_black")}/>
      <span className={loggedIn ? "header__icon_line" : (isMobilePopup ? "header__icon_line" : "header__icon_line header__icon_line_black")}/>
    </button>
  )
  // console.log(loggedIn)
  return (
    <header className={isMobilePopup && screenWidth <= 680? "header header__black" : "header header__border-black"}>
      <Link className={loggedIn ? "header__logo" : (isMobilePopup && screenWidth <= 680? "header__logo" : "header__logo header__logo_black")} to='/'>NewsExplorer</Link>
      {screenWidth <= 680 && buttonMenu}
      <Navigation isMobilePopup={isMobilePopup} loggedIn={loggedIn} onLoginClick={onLoginClick}/>
    </header>
  );
}

export default Header;

