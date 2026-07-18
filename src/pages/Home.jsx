import { Link } from 'react-router-dom';
import { ShieldCheck, Settings, Award, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `linear-gradient(to right, rgba(17, 17, 17, 0.9) 0%, rgba(17, 17, 17, 0.4) 100%), url('/images/tacticaloperator.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '600px' }}>
            <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Next-Generation Tactical Protection.</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>
              Elite defense equipment engineered for modern combat and security operations. Precision, durability, and uncompromising safety.
            </p>
            <div className="flex gap-4">
              <Link to="/catalog" className="btn btn-primary">Explore the Catalog</Link>
              <Link to="/contact" className="btn btn-outline">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="trust-bar py-8" style={{ backgroundColor: 'var(--bg-gunmetal)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container flex justify-between items-center flex-wrap" style={{ gap: '2rem' }}>
          <div className="flex items-center gap-2"><ShieldCheck className="text-accent" /> <span>NIJ Certified Body Armor</span></div>
          <div className="flex items-center gap-2"><Settings className="text-accent" /> <span>ISO Compliant Manufacturing</span></div>
          <div className="flex items-center gap-2"><Award className="text-accent" /> <span>Military-Grade Materials</span></div>
          <div className="flex items-center gap-2"><Globe className="text-accent" /> <span>Global Procurement (ITAR)</span></div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="catalog-preview py-24">
        <div className="container">
          <h2 className="mb-8" style={{ fontSize: '2.5rem', textAlign: 'center' }}>Featured Categories</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            
            <div className="glass-card flex-col items-center">
              <img src="/images/vest2.jpeg" alt="Ballistic Vests" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
              <h3>Ballistic Vests</h3>
              <p className="text-muted text-center mt-2">NIJ-certified body armor and modular plate carriers.</p>
            </div>

            <div className="glass-card flex-col items-center">
              <img src="/images/helmet1.jpeg" alt="Tactical Helmets" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
              <h3>Tactical Helmets</h3>
              <p className="text-muted text-center mt-2">Kevlar and ballistic-rated headgear for multi-threat environments.</p>
            </div>

            <div className="glass-card flex-col items-center">
              <img src="/images/vip vest.jpeg" alt="VIP Protection" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
              <h3>VIP Protection</h3>
              <p className="text-muted text-center mt-2">Low-profile, concealable armor for executive security.</p>
            </div>

            <div className="glass-card flex-col items-center">
              <img src="/images/helmet3.jpeg" alt="Advanced Equipment" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
              <h3>Advanced Equipment</h3>
              <p className="text-muted text-center mt-2">NVG mounts, thermal optics, and tactical accessories.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Split Section */}
      <section className="why-choose-us">
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          <div className="content py-24 px-8" style={{ backgroundColor: 'var(--bg-gunmetal-light)', padding: '6rem 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Engineered for the Frontlines.</h2>
            <p className="text-muted mb-4">
              Our equipment is rigorously tested to exceed global defense standards. We provide tier-one operators with the reliable solutions they need when failure is not an option.
            </p>
            <Link to="/about" className="btn btn-outline mt-4">Learn More About Us</Link>
          </div>
          <div className="image" style={{ 
            backgroundImage: `url('/images/tactical.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }}></div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="cta-footer py-24 text-center" style={{ backgroundColor: 'var(--brand-olive)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#FFF' }}>Equip Your Entire Force.</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Dedicated procurement support for law enforcement, military, and private security agencies.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#111', color: '#FFF' }}>Secure RFQ</Link>
        </div>
      </section>

    </div>
  );
}
