import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Nav } from 'react-bootstrap'; // Importa Nav de React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aside.css';

const Aside = () => {
  const { cartItems } = useCart();

  return (
    <aside className="bg-secondary border rounded asideStyle" aria-label="Categorías de productos">
      <h5 className='fst-italic fw-bold fs-3 text-center categorias'>Categorías</h5>
      <Nav defaultActiveKey="/" className="flex-column text-center">
        <Nav.Link as={Link} to="/" className="text-dark fst-italic fw-bold link-estilo">Todos los productos</Nav.Link>
        <Nav.Link as={Link} to="/celulares" className="text-dark fst-italic fw-bold link-estilo">Celulares</Nav.Link>
        <Nav.Link as={Link} to="/monitores" className="text-dark fst-italic fw-bold link-estilo">Monitores</Nav.Link>
        <Nav.Link as={Link} to="/televisores" className="text-dark fst-italic fw-bold link-estilo">Smart Tv</Nav.Link>
        <Nav.Link as={Link} to="/notebooks" className="text-dark fst-italic fw-bold link-estilo">Notebook</Nav.Link>
        <Nav.Link as={Link} to="/accesorios" className="text-dark fst-italic fw-bold link-estilo">Accesorios</Nav.Link>
      </Nav>
      <div className="mt-3 text-center">
        <strong className="text-white">
          {cartItems.length > 0 ? `Carrito: ${cartItems.length} productos` : 'El carrito está vacío'}
        </strong>
      </div>
    </aside>
  );
};

export default Aside;



