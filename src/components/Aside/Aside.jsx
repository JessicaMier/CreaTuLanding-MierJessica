import 'bootstrap/dist/css/bootstrap.min.css';
import './Aside.css'

const Aside = () => {
  return (
    <aside className="bg-secondary p-3 border rounded asideStyle">
      <h5 className='fst-italic fw-bold fs-3'>Categorías</h5>
      <ul className="list-group">
        <li className="list-group-item mb-3">
          <a href="#" className="text-dark text-decoration-none fst-italic fw-bold">Celulares</a>
        </li>
        <li className="list-group-item mb-3">
          <a href="#" className="text-dark text-decoration-none fst-italic fw-bold">Monitores</a>
        </li>
        <li className="list-group-item mb-3">
          <a href="#" className="text-dark text-decoration-none fst-italic fw-bold">Smart Tv</a>
        </li>
        <li className="list-group-item mb-3">
          <a href="#" className="text-dark text-decoration-none fst-italic fw-bold">Notebook</a>
        </li>
        <li className="list-group-item mb-3">
          <a href="#" className="text-dark text-decoration-none fst-italic fw-bold">Accesorios</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
