import { Link } from 'react-router-dom';
import { ShieldCheck, Settings, Award, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page" style={{ backgroundColor: 'var(--bg-matte)' }}>
      {/* Minimalist Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `linear-gradient(to top, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0.4) 60%, rgba(17, 17, 17, 0.2) 100%), url('/images/tactical.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'flex-end', /* Align text to bottom for a cleaner look */
        paddingBottom: '6rem'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Uncompromising Tactical Protection.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.3rem', marginBottom: '3rem', color: '#D0D0D0' }}>
              Precision-engineered defense equipment for elite operators. 
            </p>
            <div className="flex justify-center gap-6">
              <Link to="/catalog" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1rem' }}>View Catalog</Link>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1rem', borderColor: 'rgba(255,255,255,0.3)', color: '#FFF' }}>Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Trust Indicators */}
      <section className="trust-bar py-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container flex justify-center items-center flex-wrap" style={{ gap: '4rem', opacity: 0.8 }}>
          <div className="flex items-center gap-3"><ShieldCheck className="text-accent" size={24} /> <span style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>NIJ Certified</span></div>
          <div className="flex items-center gap-3"><Settings className="text-accent" size={24} /> <span style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>ISO Compliant</span></div>
          <div className="flex items-center gap-3"><Award className="text-accent" size={24} /> <span style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Military Grade</span></div>
          <div className="flex items-center gap-3"><Globe className="text-accent" size={24} /> <span style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>ITAR Compliant</span></div>
        </div>
      </section>

      {/* Clean Catalog Preview */}
      <section className="catalog-preview py-24">
        <div className="container">
          <h2 className="mb-12" style={{ fontSize: '2.5rem', textAlign: 'center', fontWeight: '800' }}>FEATURED SYSTEMS</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="flex-col items-center" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--bg-gunmetal)', padding: '2rem', borderRadius: '8px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <img src="/images/vest2.jpeg" alt="Ballistic Vests" style={{ height: '300px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Ballistic Vests</h3>
              <p className="text-muted text-center mt-2" style={{ fontSize: '0.95rem' }}>Modular plate carriers & Level IV Armor.</p>
            </div>

            <div className="flex-col items-center" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--bg-gunmetal)', padding: '2rem', borderRadius: '8px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <img src="/images/helmet1.jpeg" alt="Tactical Helmets" style={{ height: '300px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Combat Helmets</h3>
              <p className="text-muted text-center mt-2" style={{ fontSize: '0.95rem' }}>Advanced multi-threat headgear.</p>
            </div>

            <div className="flex-col items-center" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--bg-gunmetal)', padding: '2rem', borderRadius: '8px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <img src="/images/vip vest.jpeg" alt="VIP Protection" style={{ height: '300px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Covert Armor</h3>
              <p className="text-muted text-center mt-2" style={{ fontSize: '0.95rem' }}>Low-profile protection for executives.</p>
            </div>

          </div>
          <div className="flex justify-center" style={{ marginTop: '4rem' }}>
            <Link to="/catalog" className="btn btn-outline" style={{ borderColor: 'var(--accent-amber)', color: 'var(--accent-amber)' }}>Explore Full Catalog</Link>
          </div>
        </div>
      </section>

      {/* Minimalist Split Section */}
      <section className="why-choose-us" style={{ backgroundColor: 'var(--bg-gunmetal)' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 0, minHeight: '500px' }}>
          <div className="image" style={{ 
            backgroundImage: `url('/images/tacticaloperator.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          <div className="content flex-col justify-center px-8" style={{ padding: '6rem 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.2' }}>BUILT TO EXCEED<br/>STANDARDS.</h2>
            <p className="text-muted mb-6" style={{ fontSize: '1.1rem', maxWidth: '500px' }}>
              Our equipment is rigorously tested to exceed global defense standards. We provide tier-one operators with the reliable solutions they need when failure is not an option.
            </p>
            <div>
              <Link to="/about" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Read Our Mission</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
