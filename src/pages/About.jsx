export default function About() {
  return (
    <div className="about-page">
      
      <section className="about-hero py-24 text-center" style={{ backgroundColor: 'var(--bg-gunmetal-light)' }}>
        <div className="container">
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Uncompromising Safety.<br/>Relentless Innovation.
          </h1>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            At AMIGOS DEFENCE SERVICES INC., our mission is singular: to protect those who protect us. 
            Founded on the principles of engineering excellence and tactical superiority, we manufacture 
            and supply next-generation defense equipment for the world's most demanding environments.
          </p>
        </div>
      </section>

      <section className="mission-image" style={{
        backgroundImage: `url('/images/vest5.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '400px',
        width: '100%'
      }}></section>

      <section className="mission-content py-24">
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="mb-4" style={{ fontSize: '2.5rem', color: 'var(--accent-amber)' }}>Our Mission</h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              We are committed to saving lives and providing frontline operators with the best technology available. 
              Every vest, helmet, and accessory we produce undergoes rigorous testing to ensure absolute reliability in the field.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              From law enforcement agencies to private military contractors and allied defense forces, 
              AMIGOS DEFENCE is the trusted partner for elite tactical gear.
            </p>
          </div>
          <div>
            <img src="/images/vest6.jpeg" alt="Tactical Gear Production" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

    </div>
  );
}
