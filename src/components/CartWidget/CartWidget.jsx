import cart from './assets/carrito.png'
import './cartWidget.css'
const CartWidget = () => {
  return (
    <div>
      <img className='fs-3 imgCarrito' src={cart} alt="cart-widget" />
      <span className='px-2'>0</span>
    </div>

  )
}

export default CartWidget
