import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-secondary d-flex flex-column flex-md-row justify-content-between align-items-center"> 
      <img className="logo mb-2 mb-md-0" src="/imagenes/Tecnoshop.png" alt="Logo de Tecno Shop" />
      <p className="fs-3 fw-bold fst-italic tituloEmpresa text-center mb-2 mb-md-0">Tecno Shop</p>
      <Link to="/cart"><CartWidget /></Link>
    </nav>
  );
}

export default Navbar;

