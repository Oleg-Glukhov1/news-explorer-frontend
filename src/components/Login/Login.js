import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
function Login({
  errorMessage,
  isValidInput,
  isValid,
  handleChange,
  isOpen,
  onClose,
  hadlePopup,
  handleLogin,
  authError
})
{
  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(isValidInput);
  };
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Вход"
      button="Войти"
      name="login"
      link="Зарегистрироваться"
      hadlePopup={hadlePopup}
      isValid={isValid}
      onSubmit={handleSubmit}
      authError={authError}
    >
      <p className="popup__text">Email</p>
      <input
        className="popup__input"
        type="email"
        placeholder="Введите Email"
        required
        value={isValidInput.email || ""}
        onChange={handleChange}
        name="email"
        minLength="2"
      />
      <span className="popup__input-error">{errorMessage.email}</span>
      <p className="popup__text">Пароль</p>
      <input
        className="popup__input"
        name="password"
        type="password"
        placeholder="Введите пароль"
        id="password-input"
        required
        onChange={handleChange}
        value={isValidInput.password || ""}
        minLength="8"
      />
      <span className="popup__input-error">{errorMessage.password}</span>
    </PopupWithForm>
  );
}
export default Login;
