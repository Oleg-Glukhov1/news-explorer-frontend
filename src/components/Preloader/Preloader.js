import React from 'react';
import './Preloader.css';

function Preloader({isPreloader}) {
    return (
        <div className={isPreloader?  "preloader" : "preloader_inactive"}>
            <i className="preloader-circle"></i>
            <p className="preloader-text">Идет поиск новостей...</p>
        </div>
    )
}
export default Preloader;