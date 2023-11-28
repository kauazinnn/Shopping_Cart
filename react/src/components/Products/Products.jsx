import './Products.css'

import { useContext, useEffect, useState } from 'react'

import { fetchProducts } from '../../api/fetchProducts.js';
import { ProductCard } from '../ProductsCard/ProductsCard.jsx';
import { Loading } from '../Loading/Loading.jsx';
import { AppContext } from '../Context/AppContext.js';

export function Products() {

    const { products, setProducts, setLoading, loading } = useContext(AppContext);
    const [currentProduct, setCurrentProduct] = useState({})


    useEffect(() => {
        fetchProducts('tudo')
            .then((response) => {
                setProducts(response)
                setLoading(false);
            })
    }, []);

        return (
            (loading && <Loading />) || (
                <section className="products container">
                    {products.map((product) => <ProductCard key={product.id} data={product}/>)}
                </section>
            )
        )
}