import React, {useState} from 'react';
import './Main.scss'
import {Element} from "react-scroll/modules";
import Modal from "../Modal/Modal";

const data = [

    {
        "id": 1,
        "img": "1.png",
        "price": 39.9,
        "name": "Очищающее молочко",
        "description": "Оптимальное средство для тщательного, быстрого и легкого очищения кожи лиица."
    },
    {
        "id": 2,
        "img": "2.png",
        "price": 39.9,
        "name": "Маска для комбинированной кожи",
        "description": "Увлажняющая маска на водно-гелевой основе для комбинированной и жирной кожи."
    },
    {
        "id": 3,
        "img": "3.png",
        "price": 39.9,
        "name": "Маска грязевая",
        "description": "Грязевая маска для лица и тела с минералами Мертвого моря для свежего и ухоженного вида."
    },
    {
        "id": 4,
        "img": "4.png",
        "price": 39.9,
        "name": "Крем для рук",
        "description": "Крем для рук с  минералами жемчуга - элитный уход за чувствительной и сухой кожей рук."
    },
    {
        "id": 5,
        "img": "5.png",
        "price": 39.9,
        "name": "Крем для тела",
        "description": "Ароматизированный крем для тела с микрочастицами жемчуга - блестящее дополнение к Вашим духам."
    },
    {
        "id": 6,
        "img": "6.png",
        "price": 39.9,
        "name": "Крем антицеллюлитный",
        "description": "Новейшее средство для борьбы с целлюлитом - эффективный домашний спортивный зал для тела."
    },
    {
        "id": 7,
        "img": "7.png",
        "price": 39.9,
        "name": "Гель для умывания",
        "description": "Успокаивающий гель для умывания с новой формулой для мужчин - нет раздражений и сухости после бритья."
    },
    {
        "id": 8,
        "img": "8.png",
        "price": 39.9,
        "name": "Бальзам после бритья",
        "description": "Освежающий бальзам после бритья, успокаивающий и увлажняющий кожу с новой формулой для мужчин."
    }
];

const Main = () => {
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState(null);
    const handleModal = (e, el) => {
        e.preventDefault();
        setProduct(el);
        setShowModal(true)
    };

    return (
        <div className='main'>
            <div className="container">
                <div className="main__row">
                    {
                        data.map((el, i) => {
                            if (i === 0) {
                                return (
                                    <div className="main__column" key={el.id}>
                                        <Element name="product1"/>
                                        <div className="main__item">
                                            <div className="main__image">
                                                <img src={`/img/${el.img}`} alt=""/>
                                            </div>
                                            <div className="main__title">{el.name}</div>
                                            <div className="main__text">
                                                <p>{el.description}</p>
                                            </div>
                                            <div className="main__btn">
                                                <a href='' onClick={(e) => handleModal(e, el)}
                                                   className="main__button">ПОДРОБНЕЕ</a>
                                            </div>

                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="main__column" key={el.id}>
                                        <div className="main__item">
                                            <div className="main__image">
                                                <img src={`/img/${el.img}`} alt=""/>
                                            </div>
                                            <div className="main__title">{el.name}</div>
                                            <div className="main__text">
                                                <p>{el.description}</p>
                                            </div>
                                            <div className="main__btn">
                                                <a href='' onClick={(e) => handleModal(e, el)}
                                                   className="main__button">ПОДРОБНЕЕ</a>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }

                        })
                    }
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} product={product}/>}
        </div>
    );
};

export default Main;