import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ categoria }) => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();

  const handleBuy = (item) => {
    alert(`Producto agregado al carrito: ${item.nombre}`);
  };

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Error en la carga de datos');
        }
        const data = await response.json();
        setCards(data.filter(item => 
          categoria ? item.categoria === categoria : true
        ));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    data();
  }, [categoria]);

  const product = id ? cards.find(item => item.id === parseInt(id)) : null;


  const titulo = categoria ? `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}` : 'Nuestros productos';

  return (
    <div className='row container'> 
      <h1 className='text-center mt-3 mb-5 fst-italic'>{titulo}</h1> 
      {id && product ? (
        <div className='col-12 mb-5 mt-5'>
          <div className='card colorCard'>
            <img src={product.img} className='imgCard' alt={product.nombre} />
            <div className='card-body bodyCard'>
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">{product.descripcion}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis est qui voluptates voluptate esse reprehenderit amet quisquam, nesciunt suscipit voluptas, inventore recusandae veniam minima, unde exercitationem nam aliquid in!</p>
              <button className="btn btn-dark" onClick={() => handleBuy(product)}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      ) : (
        cards.map(item => (
          <div key={item.id} className='col-6 col-md-4 mb-4'>
            <div className='card colorCard'>
              <img src={item.img} className='imgCard' alt={item.nombre} />
              <div className='card-body bodyCard'>
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <button className="btn btn-dark" onClick={() => handleBuy(item)}>Agregar al carrito</button>
                <Link to={`/producto/${item.id}`} className="btn btn-secondary mt-2 text-dark fw-bold">Ver Detalles</Link> 
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
