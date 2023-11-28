import { SearchBar } from "../SearchBar/SearchBar"
import { CartButton } from '../CartButton/CartButton.jsx';

import './Header.css'

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <SearchBar/>
                <CartButton />
            </div>
        </header>
    )
}