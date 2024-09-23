import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'

const Nabvar= ()=>{
  return (
    <nav className="bg-secondary d-flex justify-content-between align-items-center"> 
    <img className="logo" src="/Imagenes/Tecnoshop.png" alt="" />
      <p className="fs-1 fw-bold fst-italic tituloEmpresa">Tecno Shop</p>
      <CartWidget />
     
    </nav>
  )
}

export default Nabvar;