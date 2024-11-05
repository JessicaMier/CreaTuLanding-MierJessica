import React from 'react';
import { useCart } from "../../context/CartContext";
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotalPrice } = useCart();

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.nombre} - Precio: ${item.precio * item.quantity}</span>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)} className="btn-quantity">-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="btn-quantity">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="btn-quantity mx-1">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="cart-total">Total: ${getTotalPrice()}</h3>
          <button className="clear-cart-button" onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;



