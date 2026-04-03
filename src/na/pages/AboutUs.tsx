import PageHero from '../../shared/components/PageHero';

const timeline = [
  { year: '1987', text: 'Carlos Netto and Carlos André launched Software Design in São Paulo, Brazil' },
  { year: '1990', text: 'Launched initial Matera Bank suite modules—Oracle-based solutions for asset, liability, and DDA management' },
  { year: '2001', text: 'Deployed solution for newly-created Brazilian real-time payment system (SPB)' },
  { year: '2004', text: 'Software Design rebranded as Matera Systems' },
  { year: '2007', text: 'Released web-based Matera Bank core solution, ahead of Windows-dependent competitors' },
  { year: '2008', text: "Named among Brazil's Great Places To Work" },
  { year: '2013', text: "Became fintech foundation as payment regulations enabled digital account offerings; fintechs adopted Matera's modern core" },
  { year: '2016', text: 'First-to-market QR code payments with offline capability' },
  { year: '2020', text: 'Launched Matera Instant Payments; received Kinea Private Equity investment' },
  { year: '2021', text: 'Reached 240 financial institutions, 55M accounts, 800 employees' },
  { year: '2022', text: 'Expanded U.S. operations to serve American financial institutions and fintechs' },
];

const stats = [
  { value: '7+ B', label: 'PIX transactions annually' },
  { value: '90+ M', label: 'Accounts managed' },
  { value: '+280', label: 'Client institutions' },
];

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="Company"
        image="/assets/hero-about-us.jpg"
      />

      {/* About */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
            About
          </h2>
          <p style={{ color: '#444', lineHeight: 1.8 }}>
            Matera is the leading provider of banking technology for the digital currency era. From stablecoins to instant payments and QR Code solutions, our platform enables financial institutions to modernize without replacing their core. Today, 2 of the top 3 global banks and 3 of the top 10 U.S. banks rely on Matera.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '48px' }}>
            Our numbers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: 'var(--matera-green)', lineHeight: 1, marginBottom: '8px' }}>
                  {s.value}
                </div>
                <p style={{ opacity: 0.7, fontSize: '1rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '60px' }}>
            Timeline
          </h2>
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '7px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              backgroundColor: '#e0e0e0',
            }} />

            {timeline.map((item, i) => (
              <div key={i} style={{
                position: 'relative',
                paddingBottom: i < timeline.length - 1 ? '40px' : '0',
              }}>
                {/* Bullet */}
                <div style={{
                  position: 'absolute',
                  left: '-40px',
                  top: '4px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--matera-purple)',
                  border: '3px solid #fff',
                  boxShadow: '0 0 0 2px var(--matera-purple)',
                  zIndex: 1,
                }} />

                {/* Year */}
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--matera-purple)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                }}>
                  {item.year}
                </div>

                {/* Text */}
                <p style={{
                  color: '#444',
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        backgroundColor: 'var(--matera-purple)',
        color: 'var(--matera-white)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
            Join our team!
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            We'd love to hear from you at{' '}
            <a href="mailto:talent@matera.com" style={{ color: 'var(--matera-green)', fontWeight: 600 }}>
              talent@matera.com
            </a>
          </p>
        </div>
        <img
          src="/assets/banner-work-with-us.png"
          alt="Work with us at Matera"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            height: '100%',
            width: '50%',
            objectFit: 'cover',
            objectPosition: 'left center',
          }}
        />
      </section>
    </>
  );
}
