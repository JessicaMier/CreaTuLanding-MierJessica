import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Aside from './components/Aside/Aside';
import Card from './components/ItemListContainer/Card'; 
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css'


function App() {
  return (
    <CartProvider>
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
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
