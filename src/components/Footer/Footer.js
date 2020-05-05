import React from 'react';
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';


const Footer = () => {
    const styles = {

        largeIcon: {
            width: 100,
            height: 100,
        },

    };
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__column">
                    <div className="footer__info">
                        <div className="footer__leftRow">
                            <img src="/img/logoDark.png" alt="" width='130px' height='69px'/>
                            <div className="footerInfo__text">
                                <p>© 2018-2019. <span className="text__bold">Lavier Cosmetics.</span> Все права
                                    защищены.
                                </p>
                                <p>Заказы по тел: <span className="text__bold">1-700-72-74-74</span> (вс-чт:
                                    9:00-21:00/пт:
                                    9:00-15:00)</p>
                            </div>
                        </div>

                        <div className="info__facebook">
                            <p>Мы в Facebook:</p>
                            <FacebookIcon fontSize="large" color="action" iconStyle={styles.largeIcon}/>
                        </div>

                    </div>
                    <div className="footer__text">
                        <p>Бренд Lavier Cosmetics (часть израильско-французкой косметической компании Lavier Cosmetics
                            France Ltd.) представлен на израильском рынке компанией Lavier Israel (рег. н. 51405497) и
                            социальным медиа-проектом, клубом "Бон Апетит Израиль". Контактные данные, оставленные на
                            этой странице, говорят о том, что вы заинтересовались данным товаром и/или услугой и
                            соглашаетесь, чтобы наш консультант связался с вами. </p>
                        <p>Мы гарантируем, что ваши контактные данные не будут переданы третьим лицам и/или использованы
                            в сторонних маркетинговых компаниях. </p>
                        <p>Попав на данную страницу, вы соглашаетесь с <span className="text__underline">Политикой конфидециальности данных.</span>
                        </p>
                    </div>
                    <div className="footer__icons">
                        <div className="footer__leftRow">
                            <div className="icons__service">
                                <img src="/img/ride.png" alt=""/>
                                <img src="/img/quality.png" alt=""/>
                                <img src="/img/doctor.png" alt=""/>
                                <img src="/img/certificate.png" alt=""/>
                            </div>
                        </div>
                        <div className="icons__pay">
                            <p>Методы оплаты:</p>
                            <div className="icons__payment">
                                <img src="/img/visa.png" alt=""/>
                                <img src="/img/american.png" alt=""/>
                                <img src="/img/masterCard.png" alt=""/>
                                <img src="/img/payPal.png" alt=""/>
                                <img src="/img/elseOne.png" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;