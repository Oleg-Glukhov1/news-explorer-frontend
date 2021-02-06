import React from 'react';
import { Link } from 'react-router-dom';
import vkIcon from '../../images/vk-icon.svg';
import gitHubIcon from '../../images/github-icon.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__links">
            <ul className="footer__links-info">
                <li><Link exact to="/" className="footer__link-info">Главная</Link></li>
                <li><a href="https://praktikum.yandex.ru/" className="footer__link-info" target="_blank" rel = "noreferrer">Яндекс.Практикум</a></li>
            </ul>
            <ul className="footer__links-cocial">
                <li><a href="https://github.com/" className="footer__link-cocial" target="_blank" rel ="noreferrer"><img className="footer__link-cocial-icon" src={gitHubIcon} alt="Гит"/></a></li>
                <li><a href="https://github.com/" className="footer__link-cocial" target="_blank" rel ="noreferrer"><img className="footer__link-cocial-icon" src={vkIcon} alt="Вконтакте"/></a></li>
            </ul>
            </div>
        </footer>
    )
}
export default Footer;