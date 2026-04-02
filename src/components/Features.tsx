import React from 'react';

const features = [
  {
    title: 'API-First, Event-Driven, Cloud Native',
    text: "Matera's platform is built on modern APIs and real-time event processing, helping financial institutions meet today's digital demands — and tomorrow's.",
  },
  {
    title: 'Unified Payments for a Borderless World',
    text: 'From QR Code to clearing, Matera connects stablecoins, instant payments, and bank infrastructure into a single real-time solution—local or global.',
  },
  {
    title: 'Modern Infrastructure for a Real-Time World',
    text: 'Offer stablecoins, instant payments, and deliver 24x7 digital banking — all without replacing your core systems.',
  },
  {
    title: 'Powering 24x7 Digital Banking',
    text: "Matera's technology keeps banks and credit unions always on, delivering seamless, real-time experiences that today's customers expect.",
  },
];

const Features: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--matera-black)', color: 'var(--matera-white)', padding: '80px 0' }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '700',
          marginBottom: '60px',
        }}>
          Next Gen Banking. Keep Your Core.
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '48px'
        }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'var(--matera-green)',
                  marginTop: '6px',
                  flexShrink: 0
                }} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {f.title}
                </h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.7', paddingLeft: '22px' }}>
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
