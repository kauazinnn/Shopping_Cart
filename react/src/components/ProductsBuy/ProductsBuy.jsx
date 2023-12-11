import './ProductsBuy.css';
import formatCurrency from '../Utills/formatCurrency.js'

export function ProductBuy({ isOpenModal, isCloseModal, data }) {

    const { title, thumbnail, price } = data;

    if (isOpenModal) {
        return (
            < div className='background-modal' >
                <section className='product-content'>

                    <div className='close' onClick={isCloseModal}>
                        X
                    </div>
                    <img
                        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                        alt="imagem do produto"
                        className="product-image"
                    />

                    <div className="subtitle">
                        <h3 className='inf'>{title}</h3>
                        <h2 className='price'>{formatCurrency(price, 'BRL')}</h2>
                        <h4 className='blue-string'>Ver os meios de pagamento</h4>
                        <h3 className='strong-mensage'>Envio para todo o país</h3>
                        <h3 className='clear-mensage'>Saiba os prazos de entrega e as formas de envio.</h3>
                        <h4 className='blue-string'>Calcular o prazo de entrega</h4>

                        <div className='button'>
                            <button type="button" className="button-buy">COMPRAR</button>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}