import React from 'react';
import './Header.scss'
import {Link} from "react-scroll";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src="/img/logo.jpg" alt=""/>
                    </div>
                    <div className="header__text">
                        <p>Заказы по тел: 1-700-72-74-74</p>
                        <p>(вс-чт: 9:00-21:00/пт: 9:00-15:00)</p>
                    </div>
                </div>
                <div className="header__info">
                    <p className="info__pink-text">Акционные предложения!</p>
                    <p className="info__text">Компания Lavier - передовая косметическая компания, работающая с учеными
                        ≪Loreal Paris≫. В основе нашей продукции натуральные компоненты - жемчужный порошок,
                        растительные экстракты и нанозолото. Наша косметика обладает омолаживающим действием. Средства
                        представлены в мужской и женской сериях.</p>
                </div>
                <div className="header__show">
                    <Link to="product1" className="header__button" spy={true} smooth={true} duration={500}>СМОТРЕТЬ
                        ТОВАРЫ</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;