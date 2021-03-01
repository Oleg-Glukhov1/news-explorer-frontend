import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import * as MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as NewsApi from "../../utils/NewsApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
  const [isValidInput, setIsValidInput] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isValid, setisValid] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoTooltip, setInfoTooltip] = React.useState(false);
  const [authError, setAuthError] = React.useState("");
  const [articles, setArticles] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [preloader, setPreloader] = React.useState(false);
  const history = useHistory();
 
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
    setAuthError("");
  }

  function handleMobileClick() {
    setIsMobileOpen(!isMobileOpen);
  }

  function handleLoginClick() {
    setIsLoginOpen(true);
    setIsMobileOpen(false);
  }
  function handleRegisterClick() {
    setIsRegisterOpen(true);
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
    if (isInfoTooltip) {
      setInfoTooltip(false);
      setIsLoginOpen(true);
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
    setInfoTooltip(false);
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
  const [savedArticles, setSavedArticles] = React.useState([]);


  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      Promise.all([MainApi.getUserInfo(token), MainApi.getArticle(token)])
        .then(([user, savedArticles]) => {
          setCurrentUser(user);
          setSavedArticles(savedArticles.reverse());
          setLoggedIn(true);
          if (JSON.parse(localStorage.getItem('articles')) !== null) {
          setKeyword(localStorage.getItem('keyword'));
          const articles = JSON.parse(localStorage.getItem("articles"));
          setArticles(articles);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  

  // Регистрация
  function handleRegister(email, password, name) {
    MainApi.register(email, password, name)
      .then((res) => {
        if (res) {
          setCurrentUser(res)
          setIsRegisterOpen(false);
          setInfoTooltip(true);
        } 
      })
      .catch((err) => {
        if (err) {
          setAuthError("Такой пользователь уже есть");
        } else {
          setAuthError("Что-то пошло не так! Попробуйте ещё раз.");
        }
      });
  }

  // Авторизация
  function handleLogin(email, password) {
    MainApi.login(email, password)
    .then((res) => {
      if (res) {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        closeAllPopups();
      }
    })
    .catch((err) => {
      if (err) {
        setAuthError("Неправильный email или пароль");
      } else {
        setAuthError("Что-то пошло не так! Попробуйте ещё раз.");
      }
    });
  }



  // Выход
  function handleExit() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("articles");
    localStorage.removeItem("keyword");
    setArticles([]);
    history.push("/");
  }
  const [preloaderNotFound, setPreloaderNotFound] = React.useState(false)
  // Поиск новостей
  function handleSearchClick(keyword) {
    
    setPreloader(true);
    setArticles([]);
    setPreloaderNotFound(false)
    NewsApi.getArticles(keyword)
      .then((res) => {
        if (res) {
          localStorage.setItem("articles", JSON.stringify(res.articles));
          localStorage.setItem("keyword", keyword);
          setArticles(res.articles);
          setKeyword(keyword);
        }
        if (res.articles.length === 0) {
          setPreloaderNotFound(true)
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  }


  function handleSaveArticle(article, keyword) {
    MainApi.addArticle(article, keyword)
      .then((res) => {
        setSavedArticles([res, ...savedArticles]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleDeleteArticle(article) {
    MainApi
    .deleteArticle(article)
      .then(() => {
        const arrayArticles = savedArticles.filter((i) => (i._id !== article));
        setSavedArticles(arrayArticles);
      })
      .catch((err) => {
        console.error(err);
      });
  }


  function newsSavedArticles(article, keyword, myArticle) {
    const arrayArticles = savedArticles.find((i) => {
      if (article) {
        return i.title === article.title;
      } else if (myArticle) {
        return i.title === myArticle.title;
      }
    });
    if (arrayArticles) {
      handleDeleteArticle(arrayArticles._id);
    } else {
      handleSaveArticle(article, keyword);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header
              loggedIn={loggedIn}
              screenWidth={screenWidth}
              isMobilePopup={isMobileOpen}
              onMobilePopup={handleMobileClick}
              onLoginClick={handleLoginClick}
              isBlack={false}
              handleExit={handleExit}
            />
            <Main
              handleSearchClick={handleSearchClick}
              articles={articles}
              keyword={keyword}
              isPreloader={preloader}
              newsSavedArticles={newsSavedArticles}
              savedArticles={savedArticles}
              onRegisterClick={handleRegisterClick}
              loggedIn={loggedIn}
              isPreloaderNotFound={preloaderNotFound}
            />
          </Route>
          <Route path="/saved-news">
            <Header
              loggedIn={loggedIn}
              screenWidth={screenWidth}
              isMobilePopup={isMobileOpen}
              onMobilePopup={handleMobileClick}
              isBlack={true}
              handleExit={handleExit}
            />
            <ProtectedRoute
              path="/saved-news"
              loggedIn={loggedIn}
              component={SavedNews}
              newsSavedArticles={newsSavedArticles}
              savedArticles={savedArticles}
            />
            <Route>
              {loggedIn ? <Redirect to="/saved-news" /> : <Redirect to="/" />}
            </Route>
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
          handleLogin={handleLogin}
          authError={authError}
        />
        <Register
          errorMessage={errorMessage}
          isValidInput={isValidInput}
          isValid={isValid}
          handleChange={FormValidator}
          isOpen={isRegisterOpen}
          hadlePopup={hadlePopupClick}
          onClose={closeAllPopups}
          handleRegister={handleRegister}
          authError={authError}
        />
        <InfoTooltip
          onClose={closeAllPopups}
          isOpen={isInfoTooltip}
          hadlePopup={hadlePopupClick}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
