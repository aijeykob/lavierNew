import React from 'react';
import './Reviews.scss'

const comments = [
    {
        username: 'Алина',
        img: 'user1.png',
        comment: 'Спасибо вам за шампунь, очень классный. Пользуюсь уже третьим тюбиком',
        like: 1,
        answer: {
            img: 'admin.png',
            username: 'Lavier Cosmetics',
            comment: 'Спасибо Вам за отзыв! Будем и дальше стараться!'
        }
    },
    {
        username: 'Светлана',
        img: 'user2.png',
        comment: 'Добрый день! Спасибо! Я очень давно пользуюсь косметикой фирмы Лавьер, очень довольна.',
        like: 0
    },
    {
        username: 'Елена',
        img: 'user3.png',
        comment: 'Моей внучке подарили на День Рождения, радости было ..... А ей уже 10. Очень оригинальный подарок',
        like: 0
    }
];

const Reviews = () => {
    return (
        <div className='reviews'>
            <div className="reviews__image">
                <img src="/img/reviewLeft.png" alt=""/>
            </div>
            <div className="reviews__row">

                <div className="reviews__body">
                    <div className="reviews__title">
                        <p>ОТЗЫВЫ НАШИХ ПОКУПАТЕЛЕЙ</p>
                    </div>
                    {
                        comments.map(el => {
                            return (
                                <div className="reviews__comment comment">
                                    <div className="comment__main">
                                        <div className="comment__avatar">
                                            <img src={`/img/${el.img}`} alt=""/>
                                        </div>
                                        <div className="comment__text">
                                            <span className='comment__username'>{el.username} </span>
                                            {el.comment}
                                        </div>
                                        {
                                            (el.like > 0) ?
                                                <div className="comment__likeCounter likeCounter">
                                                    <div className="likeCounter__img">
                                                        <img src="/img/like.png" alt=""/>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </div>
                                    <div className="comment__actions">
                                        <a href="" className="comment__like">Нравится</a>
                                        <a href="" className="comment__answer">Ответить</a>
                                        <div className='comment__date'>1 д.</div>
                                    </div>
                                    {
                                        (el.answer) ?
                                            <div className="reviews__comment answer">
                                                <div className="comment__main">
                                                    <div className="comment__avatar">
                                                        <img src={`/img/${el.answer.img}`} alt=""/>
                                                    </div>
                                                    <div className="comment__text answerText">
                                                        <span className='comment__username'>{el.answer.username} </span>
                                                        {el.answer.comment}
                                                    </div>
                                                    {
                                                        (el.answer.like > 0) ?
                                                            <div className="comment__likeCounter likeCounter">
                                                                <div className="likeCounter__img">
                                                                    <img src="/img/like.png" alt=""/>
                                                                </div>
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                                <div className="comment__actions">
                                                    <a href="" className="comment__like">Нравится</a>
                                                    <a href="" className="comment__answer">Ответить</a>
                                                    <div className='comment__date'>1 д.</div>
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Reviews;