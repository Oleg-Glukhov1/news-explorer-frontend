import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <h3 className="saved-news-header__title">Сохраненные статьи</h3>
        <p className="saved-news-header__info">Грета, у вас 5<br />сохраненных статей</p>
        <p className="saved-news-header__key">По ключевым словам:&nbsp;<span className="saved-news-header__span">Природа, Тайга</span>&nbsp;и&nbsp;<span className="saved-news-header__span">2-м другим</span></p>
     </section>
  );
}

export default SavedNewsHeader;
