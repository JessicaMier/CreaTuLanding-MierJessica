import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabvar from './components/Navbar/Navbar';
import Aside from './components/Aside/Aside';
import Card from './components/ItemListContainer/Card'; 
import Footer from './components/Footer/Footer';

function App() {
  
  

  return (
    <>
    <Nabvar />
    <div className="container-fluid">
      <div className="row">
        <aside className="col-md-3">
          <Aside />
        </aside>
        <main className="col-md-9">
          <Card />
        </main>
      </div>
    </div>
    <Footer />
  </>
  );
}

export default App;
