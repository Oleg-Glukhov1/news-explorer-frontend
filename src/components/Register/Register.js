import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
function Register({
  handleChange,
  errorMessage,
  isValidInput,
  isValid,
  isOpen,
  onClose,
  hadlePopup,
  handleRegister,
  authError
}) {
  const handleSubmit = (evt) => { 
    evt.preventDefault(); 
    handleRegister(isValidInput); 
  }; 
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Регистрация"
      button="Зарегистрироваться"
      name="register"
      link="Войти"
      hadlePopup={hadlePopup}
      isValid={isValid}
      onSubmit={handleSubmit}
      authError={authError}
    >
      <p className="popup__text">Email</p>
      <input
        name="email"
        className="popup__input"
        type="email"
        placeholder="Введите Email"
        required
        minLength="2"
        onChange={handleChange}
        value={isValidInput.email || ""}
      />
      <span className="popup__input-error">{errorMessage.email}</span>
      <p className="popup__text">Пароль</p>
      <input
        name="password"
        className="popup__input"
        type="password"
        placeholder="Введите пароль"
        required
        minLength="8"
        onChange={handleChange}
        value={isValidInput.password || ""}
      />
      <span className="popup__input-error">{errorMessage.password}</span>
      <p className="popup__text">Имя</p>
      <input
        name="name"
        className="popup__input"
        type="text"
        placeholder="Введите своё имя"
        minLength="2"
        onChange={handleChange}
        value={isValidInput.name || ""}
        required
      />
      <span className="popup__input-error">{errorMessage.name}</span>
    </PopupWithForm>
  );
}
export default Register;
