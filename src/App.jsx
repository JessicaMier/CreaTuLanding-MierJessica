import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Aside from './components/Aside/Aside';
import Card from './components/ItemListContainer/Card'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-3">
            <Aside />
          </aside>
          <main className="col-md-9">
            <Routes>
              <Route path="/" element={<Card />} />
              <Route path="/celulares" element={<Card categoria="celulares" />} />
              <Route path="/monitores" element={<Card categoria="monitores" />} />
              <Route path="/televisores" element={<Card categoria="televisores" />} />
              <Route path="/notebooks" element={<Card categoria="notebooks" />} />
              <Route path="/accesorios" element={<Card categoria="accesorios" />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
