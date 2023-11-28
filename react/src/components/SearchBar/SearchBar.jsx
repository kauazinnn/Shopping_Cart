import { BsSearch } from 'react-icons/bs';
import { useContext, useState } from 'react';

import './SearchBar.css';
import { fetchProducts } from '../../api/fetchProducts.js'
import { AppContext } from '../Context/AppContext.js';

export function SearchBar() {

    const [ searchValue, setSearchValue ] = useState('');

    const { setProducts, setLoading } = useContext(AppContext);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true)

        const products = await fetchProducts(searchValue);

        setProducts(products);
        setLoading(false)
        setSearchValue('');
    }

    return (
        <form className='search__bar' onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                className="search__input"
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />

            <button type="submit" className="search__button">
                <BsSearch />
            </button>
        </form>
    )
}