import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aside.css';

const Aside = () => {
  return (
    <aside className="bg-secondary p-3 border rounded asideStyle">
      <h5 className='fst-italic fw-bold fs-3'>Categorías</h5>
      <ul className="list-group">
        <li className="list-group-item mb-3">
          <Link to="/" className="text-dark text-decoration-none fst-italic fw-bold">Todos los productos</Link>
        </li>
        <li className="list-group-item mb-3">
          <Link to="/celulares" className="text-dark text-decoration-none fst-italic fw-bold">Celulares</Link>
        </li>
        <li className="list-group-item mb-3">
          <Link to="/monitores" className="text-dark text-decoration-none fst-italic fw-bold">Monitores</Link>
        </li>
        <li className="list-group-item mb-3">
          <Link to="/televisores" className="text-dark text-decoration-none fst-italic fw-bold">Smart Tv</Link>
        </li>
        <li className="list-group-item mb-3">
          <Link to="/notebooks" className="text-dark text-decoration-none fst-italic fw-bold">Notebook</Link>
        </li>
        <li className="list-group-item mb-3">
          <Link to="/accesorios" className="text-dark text-decoration-none fst-italic fw-bold">Accesorios</Link>
        </li>
      </ul>
      
     
    </aside>
  );
};

export default Aside;

