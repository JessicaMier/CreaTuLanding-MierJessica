import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';
import db from '../../config/firebase'; 
import { doc, getDoc } from 'firebase/firestore'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); 
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'productos', id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.error('Producto no encontrado');
          setProduct(null);
        }
      } catch (error) {
        console.error('Error al cargar el producto desde Firestore:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity }; 
    addToCart(productToAdd);
    alert(`Producto agregado al carrito: ${product.nombre}`);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail-container">
      <h2 className="text-center mt-3 mb-4">{product.nombre}</h2>
      <div className="card detail-card">
        <img src={product.img} alt={product.nombre} className="img-fluid" />
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">{product.descripcion}</p>
          <p className="price">Precio: ${product.precio}</p>
          <div className="quantity-controls">
            <button className="btn-quantity" onClick={decreaseQuantity}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="btn-quantity" onClick={increaseQuantity}>+</button>
          </div>
          <button className="btn btn-dark" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


