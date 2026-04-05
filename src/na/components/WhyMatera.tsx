import React from 'react';

const proofPoints = [
  {
    title: 'Proven',
    items: ['7.2B+ Pix transactions per year', '3.6B+ QR Code payments per year'],
  },
  {
    title: 'Deep Expertise',
    items: ['30+ years in Core banking', 'Involved in Pix creation'],
  },
  {
    title: 'Pioneer',
    items: [
      'Leading-edge tech',
      'Microservices, cloud, API/events',
      'Collaborate with banks to launch innovative solutions',
    ],
  },
];

const WhyMatera: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        {/* Left: text content */}
        <div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            color: 'var(--matera-white)',
            marginBottom: '60px',
            lineHeight: '1',
          }}>
            Why Matera
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {proofPoints.map((point, i) => (
              <div key={i}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  fontStyle: 'italic',
                  color: 'var(--matera-white)',
                  marginBottom: '8px',
                  paddingBottom: '8px',
                  borderBottom: '3px solid var(--matera-green)',
                  display: 'inline-block',
                }}>
                  {point.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                  {point.items.map((item, j) => (
                    <li key={j} style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="why-matera-photo" style={{
          position: 'relative',
          height: '100%',
          minHeight: '500px',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          <img
            src="/why-matera-bg.webp"
            alt="Person using mobile banking"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '16px',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
          }
          .why-matera-photo {
            min-height: auto !important;
            height: auto !important;
            aspect-ratio: 16 / 9;
          }
          .why-matera-photo img {
            object-position: center 30% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyMatera;
