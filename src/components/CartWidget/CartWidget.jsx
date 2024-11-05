import React from 'react';
import { useCart } from "../../context/CartContext";
import cart from './assets/carrito.png';
import './cartWidget.css';

const CartWidget = () => {
  const { cartItems } = useCart();

  // Calcular el total de unidades en el carrito
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div>
      <img className='fs-3 imgCarrito' src={cart} alt="cart-widget" />
      <span className='px-2 text-white fs-5 text-decoration-none'>{totalItems}</span> {/* Muestra la cantidad total de unidades */}
    </div>
  );
}

export default CartWidget;
