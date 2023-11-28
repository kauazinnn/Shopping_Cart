import './ProductsCard.css'
import propTypes from 'prop-types';

import { BsFillCartPlusFill } from 'react-icons/bs'
import formatCurrency from '../Utills/formatCurrency';
import { AppContext } from '../Context/AppContext.js';
import { useCallback, useContext, useState } from 'react';
import { ProductBuy } from '../ProductsBuy/ProductsBuy.jsx';


export function ProductCard({ data }) {

    const { title, thumbnail, price } = data;
    const { cartItems, setCartItems, setModalItems, modalItems } = useContext(AppContext);


    const [openModal, setOpenModal] = useState(false)


    const handleAddCart = useCallback((e) => {
        setCartItems([...cartItems, data]);
        e.stopPropagation();
    }, [cartItems, data])


    const handleAddModal = () => {
        setModalItems([...modalItems, data])
        setOpenModal(true)
    }

    return (
        <div>
            <section className="products__card" onClick={handleAddModal}>

                <img
                    src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                    alt="product"
                    className="card__img"
                />

                <div className="car__infos">
                    <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
                    <h2 className="card__title">{title}</h2>
                </div>

                <button
                    type="button"
                    className="button__add-cart"
                    onClick={handleAddCart}
                >
                    <BsFillCartPlusFill />
                </button>
            </section>
            {modalItems.map((modalItem) => <ProductBuy
                key={modalItem.id}
                data={modalItem}
                isOpenModal={openModal}
                isCloseModal={() => setOpenModal(!openModal)}
            />)}

        </div >
    )
}

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;