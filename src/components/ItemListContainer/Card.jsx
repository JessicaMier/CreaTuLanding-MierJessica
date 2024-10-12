import { useEffect, useState } from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ categoria }) => {
 const [cards, setCards] = useState([])

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
      setCards(data.filter(item => categoria ? item.categoria === categoria : true));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  data();
}, [categoria]);
 
  return (
    <div className='row container'>
      <h1 className='text-center mt-3 mb-5 fst-italic' >Nuestros productos</h1>
      {cards.map(item =>(
        <div key={item.id} className='col-6 col-md-4 mb-4'>
          <div className='card colorCard'>
            <img src={item.img} className='imgCard' alt={item.nombre} />
            <div className='card-body bodyCard'>
            <h5 className="card-title">{item.nombre}</h5>
            <p className= "card-text">{item.descripcion}</p>
            <button className="btn btn-dark"onClick={() => handleBuy(item)}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>

  )

}      
export default Card;