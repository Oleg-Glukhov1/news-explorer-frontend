import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
  const [isValidInput, setIsValidInput] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isValid, setisValid] = React.useState(false);
  const FormValidator = (e) => {
    const { name, value } = e.target;
    setIsValidInput({ ...isValidInput, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: e.target.validationMessage });
    setisValid(e.target.form.checkValidity());
  };

  function resetFormValidator() {
    setisValid(false);
    setErrorMessage("");
    setIsValidInput("");
  }

  function handleMobileClick() {
    setIsMobileOpen(!isMobileOpen);
  }

  function handleLoginClick() {
    setIsLoginOpen(true);
    setIsMobileOpen(false);
  }

  function hadlePopupClick() {
    if (isRegisterOpen) {
      handleLoginClick();
      setIsRegisterOpen(false);
      resetFormValidator();
    }
    if (isLoginOpen) {
      setIsRegisterOpen(true);
      setIsLoginOpen(false);
      resetFormValidator();
    }
  }
  function handleEscClose(evt) {
    if (evt.key === "Escape") closeAllPopups();
  }
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup")) closeAllPopups();
  }
  React.useEffect(() => {
    const popup = document.querySelector(".popup");
    if (popup) {
      popup.addEventListener("mousedown", handleOverlayClose);
      document.addEventListener("keydown", handleEscClose);
    }
    return () => {
      popup.removeEventListener("mousedown", handleOverlayClose);
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    resetFormValidator();
  }

  const updateScreenWidth = () => {
    const currentScreenWidth = window.innerWidth;
    setScreenWidth(currentScreenWidth);
  };

  React.useEffect(() => {
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header
            loggedIn={true}
            screenWidth={screenWidth}
            isMobilePopup={isMobileOpen}
            onMobilePopup={handleMobileClick}
            onLoginClick={handleLoginClick}
          />
          <Main />
        </Route>
        <Route path="/saved-news">
          <Header
            loggedIn={false}
            screenWidth={screenWidth}
            isMobilePopup={isMobileOpen}
            onMobilePopup={handleMobileClick}
          />
          <SavedNews />
        </Route>
      </Switch>
      <Login
        errorMessage={errorMessage}
        isValidInput={isValidInput}
        isValid={isValid}
        handleChange={FormValidator}
        isOpen={isLoginOpen}
        hadlePopup={hadlePopupClick}
        onClose={closeAllPopups}
      />
      <Register
        errorMessage={errorMessage}
        isValidInput={isValidInput}
        isValid={isValid}
        handleChange={FormValidator}
        isOpen={isRegisterOpen}
        hadlePopup={hadlePopupClick}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
