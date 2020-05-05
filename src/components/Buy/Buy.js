import React from 'react';
import './Buy.scss'
import {Element} from "react-scroll/modules";


const Buy = () => {
    return (
        <div className='buy'>
            <Element name="buyProduct"/>
            <div className="container">
                <div className="buy__column">
                    <div className="buy_title">
                        <p>Оставьте заявку на косметику по акционной цене</p>
                    </div>
                    <div className="buy__subTitle">
                        <p>(почтовая пересылка по Израилю - бесплатно)</p>
                    </div>
                    <div className="buy__text">
                        <p>В течение 1 дня консультант свяжется с вами для ответа на все вопросы о качестве косметики,
                            ее приемуществах, согласования списка товаров и оформление заказа.</p>
                    </div>
                    <div className="buy__inputColumn">
                        <div className="buy__name">
                            <p>Имя<span className='redStar'>*</span></p>
                            <input className='buy__input'
                                   id='buy__input'
                                   type='text'
                                   placeholder='Как вас зовут?'/>
                        </div>
                        <div className="buy__phone">
                            <p>Телефон<span className='redStar'>*</span></p>
                            <input className='buy__input' type='text' placeholder='05...'/>
                        </div>
                    </div>
                    <a href='' className="buy__btn">Послать данные</a>
                    <div className="buy__HubSpot">
                        Create your own <a href='' className='HubSpot__blue'>free form with HubSpot</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;