import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2 logo">
          <Shield size={32} className="text-accent" />
          <span className="brand-name">AMIGOS DEFENCE</span>
        </Link>
        
        <div className="desktop-menu flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/catalog" className="nav-link">Catalog</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">B2B / Govt</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Request Quote</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/catalog" onClick={() => setIsOpen(false)}>Catalog</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>B2B / Govt</Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer py-16">
      <div className="container grid footer-grid">
        <div className="footer-brand">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={28} className="text-accent" />
            <span className="brand-name">AMIGOS DEFENCE</span>
          </div>
          <p className="text-muted">Elite defense equipment engineered for modern combat and security operations.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Legal & Compliance</h4>
          <ul>
            <li><a href="#">ITAR Compliance</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom mt-8">
          <p className="text-muted">© 2026 AMIGOS DEFENCE SERVICES INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
