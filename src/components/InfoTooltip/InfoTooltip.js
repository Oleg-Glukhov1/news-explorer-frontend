import React from "react"; 
import "../PopupWithForm/PopupWithForm.css";
import "./InfoTooltip.css";
const InfoTooltip = ({ isOpen, onClose, hadlePopup }) => { 
  return ( 
    <section
    className={`popup ${isOpen ? "popup_opened" : ""}`}
  >
    <form className="popup__form">
      
      <button
        type="button"
        onClick={onClose}
        className="popup__close"
      ></button>
      <h3 className="popup__title">Пользователь успешно зарегистрирован!</h3>
      <button
      onClick={hadlePopup}
        type="button"
        className="popup__button-success"
      >
      Войти</button>
    </form>
  </section>
  ); 
}; 
export default InfoTooltip; 

