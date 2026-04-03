import React from 'react';

const CTA: React.FC = () => {
  return (
    <section style={{
      padding: '80px 0',
    }}>
      <div className="container">
        <div style={{
          backgroundColor: '#461CDC',
          color: 'var(--matera-white)',
          borderRadius: '8px',
          padding: 'clamp(40px, 5vw, 64px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              lineHeight: '1.1',
            }}>
              Get Started with Matera
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: '1.1rem',
              opacity: 0.9,
              marginBottom: '32px',
              lineHeight: '1.7',
            }}>
              Start modernizing without the risk. Connect with Matera to explore real-time, API-first solutions that work with your existing core.
            </p>
            <a href="/en/contact-us" className="btn-matera btn-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
