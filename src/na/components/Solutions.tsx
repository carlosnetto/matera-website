import React from 'react';

const solutions = [
  {
    icon: '/assets/stablecoin_2abb4b6254.svg',
    title: 'Digital Twin for Stablecoins',
    text: 'Protect your deposits by offering stablecoins within the banking experience. Digital Twin supports off-chain stablecoin transactions that are high-performance, privacy-preserving, and embedded in digital banking apps. Avoid gas fees, maintain full control, and keep deposits inside the traditional financial system.',
    href: '#'
  },
  {
    icon: '/assets/real_time_payments_f333b57894.svg',
    title: 'Digital Twin for Real-Time Payments',
    text: 'Enable your customers to pay and get paid instantly. Digital Twin is a lightweight, high-speed ledger that augments your core to enable 24x7 real-time payment processing with the resilience, scale, and performance modern banking demands.',
    href: '#'
  },
  {
    icon: '/assets/qr_code_e9a72b7bb1.svg',
    title: 'QR Code Payments',
    text: 'Let your billers and merchants accept instant payments with one simple scan. Supports FedNow/RTP, ACH, push to card. Integrated with invoices, POS, e-commerce. Designed for flexibility, automation and scale.',
    href: '#'
  }
];

const Solutions: React.FC = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--matera-gray)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            color: 'var(--matera-blue)'
          }}>
            Solutions for real-time finance - stablecoins to instant payments
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {solutions.map((s, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--matera-blue)',
              padding: '48px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img
                src={s.icon}
                alt={s.title}
                style={{ width: '64px', height: '64px', marginBottom: '32px', objectFit: 'contain' }}
              />
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: 'var(--matera-white)',
              }}>
                {s.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '32px', flexGrow: 1, lineHeight: '1.7' }}>
                {s.text}
              </p>
              <a href={s.href} style={{
                color: 'var(--matera-green)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem',
                transition: 'gap 0.2s'
              }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
