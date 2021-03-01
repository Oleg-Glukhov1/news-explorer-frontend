import React from "react";
import NoResult from '../../images/not-found.svg';
import "./NotFondPreloyder.css";

function NotFondPreloyder({ isPreloaderNotFound }) {
  return (
    <div className={`${isPreloaderNotFound ? "not-fond-preloyder" : "not-fond-preloyder_inactive"}`}>
      <img
        className="not-fond-preloyder__img"
        src={NoResult}
        alt="Смайлик"
      ></img>
      <h3 className="not-fond-preloyder__title">Ничего не найдено</h3>
      <p className="not-fond-preloyder__subtitle">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </div>
  );
}
export default NotFondPreloyder;
