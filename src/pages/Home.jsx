import { Link } from 'react-router-dom';
import { ShieldCheck, Settings, Award, Globe, Briefcase, Truck, PackageCheck, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page" style={{ backgroundColor: 'var(--bg-matte)' }}>
      {/* Minimalist Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `linear-gradient(to top, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0.4) 60%, rgba(17, 17, 17, 0.2) 100%), url('/images/vest4.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'flex-end', 
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

      {/* NEW: Core Capabilities Section */}
      <section className="capabilities py-24" style={{ backgroundColor: 'var(--bg-gunmetal)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>CORE CAPABILITIES</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We provide comprehensive supply chain solutions, from procurement to deployment, ensuring your force is fully equipped for any mission.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="glass-card flex-col items-center text-center" style={{ padding: '3rem 2rem' }}>
              <Briefcase size={48} className="text-accent mb-4" />
              <h3 className="mb-2">Federal Procurement</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Streamlined contracting and purchasing vehicles tailored for DOD and federal agencies.</p>
            </div>
            
            <div className="glass-card flex-col items-center text-center" style={{ padding: '3rem 2rem' }}>
              <PackageCheck size={48} className="text-accent mb-4" />
              <h3 className="mb-2">Custom Kitting</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Purpose-built equipment loadouts assembled and delivered ready for immediate deployment.</p>
            </div>

            <div className="glass-card flex-col items-center text-center" style={{ padding: '3rem 2rem' }}>
              <Truck size={48} className="text-accent mb-4" />
              <h3 className="mb-2">Global Logistics</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Secure, ITAR-compliant worldwide shipping and supply chain management.</p>
            </div>

            <div className="glass-card flex-col items-center text-center" style={{ padding: '3rem 2rem' }}>
              <Target size={48} className="text-accent mb-4" />
              <h3 className="mb-2">Mission Specific Solutions</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Consultation and sourcing for specialized environments: CBRNE, EOD, and Covert Operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Catalog Preview */}
      <section className="catalog-preview py-24">
        <div className="container">
          <h2 className="mb-12" style={{ fontSize: '2.5rem', textAlign: 'center', fontWeight: '800' }}>FEATURED SYSTEMS</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="flex-col items-center" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--bg-gunmetal-light)', padding: '2rem', borderRadius: '8px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <img src="/images/vest2.jpeg" alt="Ballistic Vests" style={{ height: '300px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Ballistic Vests</h3>
              <p className="text-muted text-center mt-2" style={{ fontSize: '0.95rem' }}>Modular plate carriers & Level IV Armor.</p>
            </div>

            <div className="flex-col items-center" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--bg-gunmetal-light)', padding: '2rem', borderRadius: '8px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <img src="/images/helmet1.jpeg" alt="Tactical Helmets" style={{ height: '300px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Combat Helmets</h3>
              <p className="text-muted text-center mt-2" style={{ fontSize: '0.95rem' }}>Advanced multi-threat headgear.</p>
            </div>

            <div className="flex-col items-center" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--bg-gunmetal-light)', padding: '2rem', borderRadius: '8px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
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
      
      {/* NEW: Contract Vehicles Banner */}
      <section className="contracts py-16" style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #222' }}>
        <div className="container text-center">
          <h4 className="text-muted mb-6" style={{ letterSpacing: '2px' }}>PROUDLY SUPPORTING GOVERNMENT CONTRACT VEHICLES</h4>
          <div className="flex justify-center items-center flex-wrap gap-8" style={{ opacity: 0.6 }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Montserrat' }}>DLA TLS</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Montserrat' }}>GSA ADVANTAGE</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Montserrat' }}>FEDMALL</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Montserrat' }}>TACOM</span>
          </div>
        </div>
      </section>

    </div>
  );
}
