import './CartItem.css'
import { BsCartDashFill } from 'react-icons/bs';
import formatCurrency from '../Utills/formatCurrency.js';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext.js';

export function CartItem({ data }) {

    const { cartItems, setCartItems } = useContext(AppContext)
    const { id, thumbnail, title, price } = data;

    const handleRemoveItem = () => {
        const updatedItem = cartItems.filter((item) => item.id != id);
        setCartItems(updatedItem)
    }

    return (
        <section className="cart-item" >
            <img
                src={thumbnail}
                alt="imagem do produto"
                className="cart-item-image"
            />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

                <button
                    type="button"
                    className="button_remove-item"
                    onClick={handleRemoveItem}>
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    )
}