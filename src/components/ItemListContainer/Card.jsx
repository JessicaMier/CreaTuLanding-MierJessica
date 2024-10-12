import { useEffect, useState } from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
 const [cards, setCards] = useState([])


 useEffect(() => {
  const data = async () => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Error en la carga de datos');
      }
      const data = await response.json();
      setCards(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  data();
}, []);
 
  return (
    <div className='row container'>
      {cards.map(item =>(
        <div key={item.id} className='col-6 col-md-4 mb-4'>
          <div className='card colorCard'>
            <img src={item.img} className='imgCard' alt={item.nombre} />
            <div className='card-body bodyCard'>
            <h5 className="card-title">{item.nombre}</h5>
            <p className= "card-text">{item.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  )

}      
export default Card;