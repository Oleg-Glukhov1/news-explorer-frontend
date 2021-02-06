import React from 'react';
import './About.css';
import author from '../../images/author.jpg';

function About() { 
    return ( 
        <section className="about">
            <img className="about__img" src={author} alt="Автор"/>
            <div className="about__author">
                <h3 className="about__author_title">Об авторе</h3>
                <p className="about__author_subtitle">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                <p className="about__author_subtitle">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    )
}
export default About;