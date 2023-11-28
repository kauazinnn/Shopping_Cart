import './Cart.css'
import { CartItem } from '../CartItem/CartItem.jsx';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext.js';
import FormatCurrancy from '../Utills/formatCurrency.js';

export function Cart() {

    const { cartItems, isCartVisible } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0);

    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cart-items">

                { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }

            </div>
            <div className="cart-resume">{FormatCurrancy(totalPrice, 'BRL')}</div>
        </section>
    )
}