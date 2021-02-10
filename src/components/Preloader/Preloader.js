import React from 'react';
import './Preloader.css';

function Preloader() {
    return (
        <div className="preloader">
            <i class="preloader-circle"></i>
            <p className="preloader-text">Идет поиск новостей...</p>
        </div>
    )
}
export default Preloader;