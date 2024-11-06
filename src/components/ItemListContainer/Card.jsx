import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../context/CartContext';
import db from '../../config/firebase'; 
import { collection, getDocs } from 'firebase/firestore'; 

const Card = ({ categoria }) => {
  const [cards, setCards] = useState([]);
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);  
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const handleBuy = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart({ ...item, quantity });
    setSelectedProduct(item);
    setShowModal(true); 
  };

  const handleQuantityChange = (id, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) + amount, 1),
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosRef = collection(db, 'productos');
        const snapshot = await getDocs(productosRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCards(data.filter(item => 
          categoria ? item.categoria === categoria : true
        ));
      } catch (error) {
        console.error('Error al cargar datos desde Firestore:', error);
      }
    };
    fetchData();
  }, [categoria]);

  const titulo = categoria ? `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}` : 'Nuestros productos';

  return (
    <div className="container-fluid">
      <h1 className='text-center mt-3 mb-5 fst-italic'>{titulo}</h1>
      <div className="row">
        {cards.map(item => (
          <div key={item.id} className='col-12 col-md-4 mb-4'>
            <div className='card colorCard'>
              <img src={item.img} className='imgCard' alt={item.nombre} />
              <div className='card-body bodyCard'>
                <h5 className="card-title text-center">{item.nombre}</h5>
                <p className="card-text text-center fs-6">{item.descripcion}</p>
                <p className='precio text-center'>${item.precio}</p>
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span className="mx-3">{quantities[item.id] || 1}</span>
                  <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button className="btn btn-dark" onClick={() => handleBuy(item)}>Agregar al carrito</button>
                <Link to={`/producto/${item.id}`} className="btn btn-secondary mt-2 text-dark fw-bold">Ver Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Producto Agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>El producto <strong>{selectedProduct.nombre}</strong> ha sido agregado al carrito.</p>
              <p>Precio: ${selectedProduct.precio}</p>
              <p>Cantidad: {quantities[selectedProduct.id] || 1}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          <Link to="/cart">
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Ir al Carrito
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Card;
