import { useContext } from 'react';
import './CartButton.css';

import { AppContext } from '../Context/AppContext.js'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

    return (
        <button
            type="button"
            className="cart__button"
            onClick={() => setIsCartVisible(!isCartVisible)}
        >
            <AiOutlineShoppingCart />
            {cartItems.length > 0
                ? <span className="cart__status">{cartItems.length}</span>
                : setIsCartVisible(false)
            }

        </button>
    )
}