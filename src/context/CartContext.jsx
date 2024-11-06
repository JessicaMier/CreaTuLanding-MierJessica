import { createContext, useContext, useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import db from '@/config/firebase';


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity: product.quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  // Confirmar la compra y registrar en Firestore
  const confirmPurchase = async () => {
    try {
      const purchaseDetails = {
        items: cartItems.map(item => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          cantidad: item.quantity,
        })),
        total: getTotalPrice(),
        fecha: serverTimestamp(), 
      };

      // Guardar la compra en la colección compras en firestore
      const docRef = await addDoc(collection(db, 'compras'), purchaseDetails);
      console.log("Compra registrada con ID:", docRef.id);

      // Vacia el carrito después de la compra
      clearCart();
      alert("Compra confirmada y registrada correctamente.");

    } catch (error) {
      console.error("Error al registrar la compra:", error);
      alert("Hubo un problema al registrar la compra.");
    }
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      increaseQuantity, 
      decreaseQuantity, 
      clearCart, 
      getTotalPrice, 
      confirmPurchase 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export { CartContext, CartProvider };

