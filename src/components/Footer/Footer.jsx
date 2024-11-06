import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>TecnoShop</h2>
            <img className="logo mb-2 mb-md-0" src="/imagenes/Tecnoshop.png" alt="Logo de Tecno Shop" />
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: info@tecnoShop.com</p>
            <p>Teléfono: +54 9 1132567890</p>
          </div>
          <div className="col-md-4">
            <h5>Seguinos en nuestras redes Sociales</h5>
            <a href="https://facebook.com" className="text-light me-2">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" className="text-light me-2">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://instagram.com" className="text-light">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <hr className="bg-light" />
          <p>&copy; {new Date().getFullYear()} TecnoShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

