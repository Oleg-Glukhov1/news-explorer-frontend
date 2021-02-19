import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
function SavedNewsHeader({savedArticles}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [keywords, setKeywords] = React.useState([]);
  const [keywordsList, setKeywordsList] = React.useState('');
  const [declination, setDeclination] = React.useState('');
  const [keywordsAdditional, setKeywordsAdditional] = React.useState('');

  React.useEffect(() => {
    const arrayKeywords = savedArticles.map((item) => item.keyword).sort();
    const uniqueArrayKeywords = arrayKeywords.filter(function(item, pos) {
      return arrayKeywords.indexOf(item) === pos;
    });
    setKeywords(uniqueArrayKeywords);
  }, [savedArticles]);

  React.useEffect(() => {
    const lengthKeywords = savedArticles.length;
    if (lengthKeywords === 0 || lengthKeywords >= 5 ) {
      setDeclination('сохраненных статей');
    };
    if (lengthKeywords === 1) {
      setDeclination('сохраненная статья');
    };
    if (lengthKeywords >=2 && lengthKeywords <= 4) {
      setDeclination('сохраненные статьи');
    };

  }, [savedArticles]);
  
  React.useEffect(() => {
    const lengthUniqueKeywords = keywords.length;
    if (lengthUniqueKeywords === 1) {
      setKeywordsList(keywords.slice(0, 1));
      setKeywordsAdditional('');
    };
    if (lengthUniqueKeywords === 2) {
      const text = keywords.join(', ');
      setKeywordsList(text);
      setKeywordsAdditional('');
    };
    if (lengthUniqueKeywords === 3) {
      const text = keywords.slice(0, 2).join(', ');
      setKeywordsList(text);
      setKeywordsAdditional(` и ${lengthUniqueKeywords - 2}-му другому`);
    };
    if (lengthUniqueKeywords > 3) {
      const text = keywords.slice(0, 2).join(', ');
      setKeywordsList(text);
      setKeywordsAdditional(` и ${lengthUniqueKeywords - 2}-м другим`);
    };
  }, [keywords]);



  return (
    <section className="saved-news-header">
      <h3 className="saved-news-header__title">Сохраненные статьи</h3>
        <p className="saved-news-header__info">{currentUser.name}, у вас {savedArticles.length}<br />{declination}</p>
        <p className="saved-news-header__key">По ключевым словам:&nbsp;<span className="saved-news-header__span">{keywordsList}</span><span className="saved-news-header__span">{keywordsAdditional}</span></p>
     </section>
  );
}

export default SavedNewsHeader;
