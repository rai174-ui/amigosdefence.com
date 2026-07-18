import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, Phone, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function TopUtilityBar() {
  return (
    <div className="top-utility-bar">
      <div className="container flex justify-between items-center" style={{ padding: '0.5rem 2rem' }}>
        <div className="flex items-center gap-2" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#DDD' }}>
          <AlertCircle size={14} className="text-accent" />
          <span>DOD Procurement Notice: End-of-Year Funding Deadlines Approaching</span>
        </div>
        <div className="flex items-center gap-6" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
          <a href="tel:+18005550000" className="flex items-center gap-2" style={{ color: '#FFF' }}>
            <Phone size={14} className="text-accent" />
            Toll-Free: 800.555.DEFENCE
          </a>
          <Link to="/contact" style={{ color: '#FFF' }}>Order Status</Link>
          <Link to="/contact" style={{ color: '#FFF' }}>Customer Portal</Link>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-3 logo">
          <img src="/images/Amigos Logo small.jpg" alt="Amigos Defence Logo" style={{ height: '40px', borderRadius: '4px' }} />
          <span className="brand-name">AMIGOS DEFENCE</span>
        </Link>
        
        <div className="desktop-menu flex items-center gap-6">
          <Link to="/" className="nav-link">Home</Link>
          
          <div className="dropdown-container" onMouseEnter={() => toggleDropdown('equipment')} onMouseLeave={() => toggleDropdown(null)}>
            <button className="nav-link flex items-center gap-2" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>
              Equipment <ChevronDown size={14} />
            </button>
            {activeDropdown === 'equipment' && (
              <div className="dropdown-menu glass-card" style={{ position: 'absolute', top: '100%', left: 0, minWidth: '200px', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
                <Link to="/catalog" className="dropdown-item">Ballistic Armor</Link>
                <Link to="/catalog" className="dropdown-item">Combat Helmets</Link>
                <Link to="/catalog" className="dropdown-item">Covert VIP Systems</Link>
                <Link to="/catalog" className="dropdown-item">Tactical Accessories</Link>
              </div>
            )}
          </div>

          <div className="dropdown-container" onMouseEnter={() => toggleDropdown('procurement')} onMouseLeave={() => toggleDropdown(null)}>
            <button className="nav-link flex items-center gap-2" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>
              Procurement <ChevronDown size={14} />
            </button>
            {activeDropdown === 'procurement' && (
              <div className="dropdown-menu glass-card" style={{ position: 'absolute', top: '100%', left: 0, minWidth: '200px', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
                <Link to="/contact" className="dropdown-item">Contract Vehicles</Link>
                <Link to="/contact" className="dropdown-item">Global Logistics</Link>
                <Link to="/contact" className="dropdown-item">Custom Kitting</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Request Quote</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/catalog" onClick={() => setIsOpen(false)}>Equipment Catalog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Procurement Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Request Quote</Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer py-16" style={{ borderTop: '2px solid var(--border-color)' }}>
      <div className="container grid footer-grid">
        <div className="footer-brand">
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/Amigos Logo small.jpg" alt="Amigos Defence Logo" style={{ height: '36px', borderRadius: '4px' }} />
            <span className="brand-name">AMIGOS DEFENCE</span>
          </div>
          <p className="text-muted" style={{ maxWidth: '300px' }}>
            Premier defense equipment provider. Logistics, procurement, and supply chain solutions for federal agencies and protective services.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Equipment</h4>
          <ul>
            <li><Link to="/catalog">Ballistic Armor</Link></li>
            <li><Link to="/catalog">Combat Helmets</Link></li>
            <li><Link to="/catalog">VIP Covert Systems</Link></li>
            <li><Link to="/catalog">Tactical Accessories</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services & Support</h4>
          <ul>
            <li><Link to="/contact">Procurement & Contracts</Link></li>
            <li><Link to="/about">About the Company</Link></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Customer Portal</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Legal</h4>
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
        <TopUtilityBar />
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
