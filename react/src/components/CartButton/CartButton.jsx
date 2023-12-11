import './CartButton.css';
import { useContext, useState } from 'react';

import { AppContext } from '../Context/AppContext.js'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible, setNumberVisible } = useContext(AppContext);

    const handleAddCartItem = () => {
        setIsCartVisible(!isCartVisible)
        
    }

    return (
        <button
            type="button"
            className="cart__button"
            onClick={handleAddCartItem}
        >
            <AiOutlineShoppingCart />
            { cartItems.length > 0
                ? <span className="cart__status">{cartItems.length}</span>
                : setIsCartVisible(false)
            }
        </button>
    )
}