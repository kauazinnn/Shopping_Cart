import './ProductsCard.css'
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../Utills/formatCurrency';
import { AppContext } from '../Context/AppContext.js';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductBuy } from '../ProductsBuy/ProductsBuy.jsx';
import { ErrorModal } from './ErrorModal.jsx';

export function ProductCard({ data }) {

    const { id, title, thumbnail, price } = data;
    const { cartItems, setCartItems, setModalItems, modalItems, isOpenErrorModal, setIsOpenErrorModal } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);

    const index = cartItems.findIndex(item => item.id === id);


    const handleAddCart = useCallback((e) => {
        setCartItems([...cartItems, data]);
        console.log(index)
        e.stopPropagation();
    }, [cartItems, data]);


    const errorModal = () => {
        setIsOpenErrorModal(true)
    }


    const handleAddModal = () => {
        setModalItems([...modalItems, data]);
        setOpenModal(true);
        document.body.style.overflow = 'hidden';
    };


    return (
        <div>
            <section className="products__card">
                <img
                    src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                    alt="product"
                    className="card__img"
                    onClick={handleAddModal} />

                <div className="car__infos">
                    <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
                    <h2 className="card__title">{title}</h2>
                </div>

                <ErrorModal />

                <button
                    type="button"
                    className="button__add-cart"
                    onClick={index < 0
                        ? handleAddCart
                        : errorModal
                    }
                >
                    <BsFillCartPlusFill />
                </button>

            </section>
            
            {modalItems.map((modalItem) => <ProductBuy
                data={modalItem}
                isOpenModal={openModal}
                isCloseModal={() => setOpenModal(!openModal)} />)
            }
        </div>
    );
}
ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
