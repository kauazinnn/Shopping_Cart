import { useState } from 'react';
import { AppContext } from './AppContext.js';
import propTypes from 'prop-types';

export function Provider({ children }) {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [productList, setProductList] = useState ([]);
    const [modalItems, setModalItems] = useState([]);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
        productList, 
        setProductList,
        modalItems,
        setModalItems
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>

    )
}

Provider.propTypes = {
    children: propTypes.any,
}.isRequired