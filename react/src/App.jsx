import { Provider } from "./components/Context/Provider.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Products } from "./components/Products/Products.jsx";
import { Cart } from "./components/Cart/Cart.jsx";

import './global.css'

export function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider> // Elemento para dividir informações entre elementos
  )
}