import React from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  isValid,
  hadlePopup,
  isOpen,
  onClose,
  children,
  title,
  button,
  name,
  link,
  onSubmit,
  authError
}) {
  return (
    <section
      className={` popup popup_${name} ${isOpen ? "popup_opened" : "popup"}`}
    >
      <form className="popup__form" onSubmit={onSubmit}>
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
        ></button>
        <h3 className="popup__title">{title}</h3>
        {children}
        <span className="popup__button-error">{authError || ''}</span>
        <button
          type="submit"
          className={
            isValid ? "popup__button" : "popup__button popup__button_disabled"
          }
        >
          {button}
        </button>
        <p className="popup__link">
          или
          <button
            type="button"
            onClick={hadlePopup}
            className="popup__button-link"
          >
            {link}
          </button>
        </p>
      </form>
    </section>
  );
}
export default PopupWithForm;
