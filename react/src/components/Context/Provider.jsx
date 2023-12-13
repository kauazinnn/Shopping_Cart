import { useState } from 'react';
import { AppContext } from './AppContext.js';
import propTypes from 'prop-types';

export function Provider({ children }) {

    const [loading, setLoading] = useState(true);
    const [isCartVisible, setIsCartVisible] = useState(true);
    const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

    
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [modalItems, setModalItems] = useState([]);
    const [productList, setProductList] = useState ([]);


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
        setModalItems,
        isOpenErrorModal,
        setIsOpenErrorModal,
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