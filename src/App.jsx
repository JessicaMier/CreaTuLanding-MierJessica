import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabvar from './components/Navbar/Navbar';
import Aside from './components/Aside/Aside';
import Card from './components/ItemListContainer/Card'; 
import Footer from './components/Footer/Footer';

function App() {
  // Función para manejar clics en los botones de las cards
  const handleButtonClick = (productName) => {
    alert(`Producto Agregado:  ${productName}`);
  };

  return (
    <div>
      <Nabvar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <Aside />
          </div>
          <div className="col-md-9">
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', }}>
              <Card
                title="Smart tv 32''"
                description="Smart TV RCA X55ANDTV LED Android TV 4K 55 pulgadas 100V/240V"
                image="/Imagenes/televisor1.jpg"  
                buttonText="Añadir al carrito"
                onButtonClick={() => handleButtonClick('Smart tv 32"')}
              />

              <Card
                title="Notebook I7 DELL"
                description="Notebook Dell Inspiron 16 5620 plata 16, Intel Core i7 1255U 16GB de RAM 512GB SSD, NVIDIA GeForce MX570 60 Hz 1920x1200px"
                image="/Imagenes/notebook4.jpg"
                buttonText="Añadir al carrito"
                onButtonClick={() => handleButtonClick('Notebook I7 DELL')}
              />

              <Card
                title="Smart TV 43''"
                description="Smart Tv Philips 43 Fhd Google Tv Control Por Voz"
                image="/Imagenes/televisor5.jpg"
                buttonText="Añadir al carrito"
                onButtonClick={() => handleButtonClick('Smart TV 43')}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
