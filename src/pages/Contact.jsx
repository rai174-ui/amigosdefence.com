import { ShieldAlert } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-page py-24">
      <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        
        {/* Left Side: Info */}
        <div className="contact-info">
          <h1 className="text-gradient mb-6" style={{ fontSize: '3rem' }}>Government & Agency Procurement</h1>
          <p className="text-muted mb-6" style={{ fontSize: '1.1rem' }}>
            We offer streamlined procurement processes, bulk pricing, and custom loadout configurations 
            for defense departments, law enforcement agencies, and private military companies globally.
          </p>
          
          <div className="glass-card mb-8" style={{ borderLeft: '4px solid var(--accent-amber)', padding: '1.5rem' }}>
            <div className="flex items-center gap-3 mb-2">
              <ShieldAlert className="text-accent" size={24} />
              <h3 style={{ color: 'var(--accent-amber)' }}>Compliance & Export Disclaimer</h3>
            </div>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              All sales of high-level body armor and ITAR-controlled items are subject to strict export 
              regulations and compliance checks. Official End-User Certificates (EUC) may be required 
              prior to fulfillment.
            </p>
          </div>

          <div>
            <h3 className="mb-2">Direct Contact</h3>
            <p className="text-muted">Email: procurement@amigosdefx.com</p>
            <p className="text-muted">Phone: +1 (800) 555-DEFENCE</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-container glass-card">
          <h2 className="mb-6">Secure RFQ Form</h2>
          <form className="flex-col" style={{ gap: '1.5rem', display: 'flex' }}>
            
            <div className="flex gap-4">
              <div className="flex-col" style={{ flex: 1 }}>
                <label className="mb-2" style={{ color: 'var(--text-secondary)' }}>Agency / Company Name</label>
                <input type="text" className="form-input" placeholder="Enter agency name" />
              </div>
              <div className="flex-col" style={{ flex: 1 }}>
                <label className="mb-2" style={{ color: 'var(--text-secondary)' }}>Official Contact Person</label>
                <input type="text" className="form-input" placeholder="Full name" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-col" style={{ flex: 1 }}>
                <label className="mb-2" style={{ color: 'var(--text-secondary)' }}>Government / Corporate Email</label>
                <input type="email" className="form-input" placeholder="name@agency.gov" />
              </div>
              <div className="flex-col" style={{ flex: 1 }}>
                <label className="mb-2" style={{ color: 'var(--text-secondary)' }}>Phone Number</label>
                <input type="tel" className="form-input" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="flex-col">
              <label className="mb-2" style={{ color: 'var(--text-secondary)' }}>Product Interest</label>
              <select className="form-input">
                <option>Ballistic Vests (Bulk)</option>
                <option>Tactical Helmets (Bulk)</option>
                <option>VIP Covert Armor</option>
                <option>Custom Loadouts</option>
              </select>
            </div>

            <div className="flex gap-4">
              <div className="flex-col" style={{ flex: 1 }}>
                <label className="mb-2" style={{ color: 'var(--text-secondary)' }}>Quantity Required</label>
                <input type="number" className="form-input" placeholder="e.g., 50" />
              </div>
              <div className="flex-col" style={{ flex: 1 }}>
                <label className="mb-2" style={{ color: 'var(--text-secondary)' }}>Required Timeline</label>
                <input type="text" className="form-input" placeholder="e.g., 30-60 days" />
              </div>
            </div>

            <button type="button" className="btn btn-primary mt-4" style={{ width: '100%', padding: '1rem' }}>
              Submit Secure RFQ
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
