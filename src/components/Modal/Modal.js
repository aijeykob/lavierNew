import React, {Fragment, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import './Modal.scss';
import {Link} from "react-scroll/modules";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    modal: {
        position: "absolute",
        top: '8px',
        right: '8px',
        '&:hover': {
            color: '#e17976',
        }
    }
};
const Modal = (props) => {
    const modalRoot = document.getElementById('modal-root');
    const el = document.createElement('div');
    useEffect(() => {
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el)
        };
    });
    const confirmBuy = (e) => {
        e.preventDefault();
        props.setShowModal(false);
        const input = document.getElementById('buy__input');
        console.log(input);
        input.focus({preventScroll: true});
    };
    const closeModal = (e) => {
        console.log(e.target);
        if (e.target.id === 'modal__column' || e.target.id === 'modal') {
            props.setShowModal(false);
        }
    };
    const {classes} = props;
    return (
        <Fragment>
            {/*{*/}
            {/*ReactDOM.createPortal(*/}
            {/*props.children,*/}
            {/*// A DOM element*/}
            {/*el,*/}
            {/*)*/}
            {/*}*/}
            <div className='modal' id='modal' onClick={(e) => closeModal(e)}>
                <div className="modal__column" id="modal__column">
                    <div className="main__item">
                        <div className="modal__image">
                            <img src={`/img/${props.product.img}`} alt=""/>
                            <div className="modal__svg" onClick={() => props.setShowModal(false)}>
                                <HighlightOffIcon className={classes.modal}/>
                            </div>

                        </div>
                        <div className="main__title">{props.product.name}</div>
                        <div className="main__text">
                            <p>{props.product.description}</p>
                        </div>
                        <div className="main__btn">
                            <Link
                                to="buyProduct"
                                onClick={(e) => confirmBuy(e)}
                                className="main__button"
                                spy={true}
                                smooth={true}
                                duration={800}
                            >
                                ХОЧУ!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default withStyles(styles)(Modal);
