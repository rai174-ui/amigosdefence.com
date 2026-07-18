import { useState } from 'react';

const products = [
  { id: 1, name: 'Advanced Operator Plate Carrier', category: 'Armor', image: '/images/vest3.jpeg', specs: 'Weight: 2.5 lbs | Material: UHMWPE | NIJ Level: IV' },
  { id: 2, name: 'Tactical Assault Vest', category: 'Armor', image: '/images/vest4.jpeg', specs: 'Weight: 3.1 lbs | Material: Kevlar | NIJ Level: III' },
  { id: 3, name: 'Covert VIP Carrier', category: 'Armor', image: '/images/vip vest.jpeg', specs: 'Weight: 1.8 lbs | Material: Aramid | NIJ Level: IIIA' },
  { id: 4, name: 'Standard Issue Vest', category: 'Armor', image: '/images/vest1.jpeg', specs: 'Weight: 4.0 lbs | Material: Steel | NIJ Level: III' },
  { id: 5, name: 'High-Cut Ballistic Helmet', category: 'Headgear', image: '/images/helmet2.jpeg', specs: 'Weight: 3.0 lbs | Material: Kevlar | NIJ Level: IIIA' },
  { id: 6, name: 'Advanced Combat Helmet', category: 'Headgear', image: '/images/helmet1.jpeg', specs: 'Weight: 3.3 lbs | Material: UHMWPE | NIJ Level: IIIA' },
  { id: 7, name: 'Night Operations Helmet', category: 'Headgear', image: '/images/helmet3.jpeg', specs: 'Weight: 3.5 lbs | Material: Kevlar | NVG Mount Included' },
  { id: 8, name: 'Modular Loadout Carrier', category: 'Armor', image: '/images/vest5.jpeg', specs: 'Weight: 2.9 lbs | Material: UHMWPE | NIJ Level: III+' },
  { id: 9, name: 'Heavy Duty Operator Vest', category: 'Armor', image: '/images/vest6.jpeg', specs: 'Weight: 5.2 lbs | Material: Ceramic/PE | NIJ Level: IV' }
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="catalog-page py-24">
      <div className="container">
        <h1 className="text-gradient mb-8" style={{ fontSize: '3rem' }}>The Catalog</h1>
        
        <div className="grid" style={{ gridTemplateColumns: '250px 1fr', gap: '4rem' }}>
          
          {/* Sidebar */}
          <aside className="sidebar">
            <h3 className="mb-4">Categories</h3>
            <ul style={{ listStyle: 'none' }}>
              {['All', 'Armor', 'Headgear', 'Optics', 'Accessories'].map(cat => (
                <li key={cat} className="mb-2">
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeCategory === cat ? 'var(--accent-amber)' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      fontFamily: 'Inter',
                      textAlign: 'left',
                      width: '100%',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-color)'
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Grid */}
          <div className="product-grid grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {filteredProducts.map(product => (
              <div key={product.id} className="glass-card flex-col">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} 
                />
                <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>{product.name}</h3>
                <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>{product.specs}</p>
                <div style={{ marginTop: 'auto' }}>
                  <button className="btn btn-outline" style={{ width: '100%' }}>View Specifications</button>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="text-muted">No products found in this category.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
